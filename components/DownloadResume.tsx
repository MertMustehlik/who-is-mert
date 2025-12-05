"use client";

import { useTranslation } from "react-i18next";
import { downloadResume } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GB, TR } from "country-flag-icons/react/3x2";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";

export function DownloadResume() {
  const { t } = useTranslation();
  const [resumeLanguage, setResumeLanguage] = useState<"tr" | "en" | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formStartTime] = useState(Date.now());

  const formSchema = z.object({
    email: z.email("Lütfen geçerli bir e-posta adresi girin"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!resumeLanguage) {
      toast.error(t("operation_failed"));
      return;
    }

    const currentTime = Date.now();
    const elapsed = (currentTime - formStartTime) / 1000;

    if (elapsed < 1) {
      toast.error(t("form.bot_spam_alert"));
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        "service_fy895fq",
        "template_ahoiz79",
        {
          email: data.email,
          language: resumeLanguage,
        },
        "e6moMyfqRFwgdHA3i"
      );

      downloadResume(resumeLanguage);

      form.reset();
      setResumeLanguage(null);
      setOpen(false);
      toast.success(t("operation_success"));
    } catch (error) {
      toast.error(t("operation_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-white text-lg md:text-xl font-semibold">
        {t("download_resume")}
      </h2>

      <div className="flex flex-col sm:flex-row gap-2">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={() => setResumeLanguage("tr")}
              className="flex items-center gap-2 justify-center w-40 cursor-pointer"
            >
              <TR className="w-5 h-5" /> Özgeçmiş TR
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={() => setResumeLanguage("en")}
              className="flex items-center gap-2 justify-center w-40 cursor-pointer"
            >
              <GB className="w-5 h-5" /> Resume EN
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <DialogHeader>
                <DialogTitle className="pe-3">
                  {t("resume_dialog.title")}
                </DialogTitle>
                <DialogDescription className="text-md text-foreground">
                  {t("resume_dialog.description")}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-form-email">
                          {t("contact_page.email")}
                        </FieldLabel>
                        <Input
                          {...field}
                          id="contact-form-email"
                          aria-invalid={fieldState.invalid}
                          placeholder={t("form.enter_field", {
                            field: t("contact_page.email"),
                          })}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">{t("buttons.cancel")}</Button>
                </DialogClose>
                <Button type="submit" disabled={loading}>
                  {loading && <Spinner />}
                  {t("buttons.download")}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
