"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formStartTime] = useState(Date.now());
  const t = useTranslations();

  const formSchema = z.object({
    name: z
      .string()
      .min(
        3,
        t("validation.min.string", {
          attribute: t("contact_page.name"),
          min: 3,
        })
      ),
    email: z.email(t("validation.email", { attribute: t("contact_page.email") })),
    message: z
      .string()
      .min(3, t("validation.min.string", { attribute: t("contact_page.message"), min: 3 }))
      .max(500, t("validation.max.string", { attribute: t("contact_page.message"), max: 500 })),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const currentTime = Date.now();
    const elapsed = (currentTime - formStartTime) / 1000;

    if (elapsed < 3) {
      toast.error(t("Form.bot_spam_alert"));
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        "service_fy895fq",
        "template_0g1r08s",
        data,
        "e6moMyfqRFwgdHA3i"
      );

      toast.success(t("ContactPage.success_message"));
    } catch (error) {
      toast.error(t("ContactPage.error_message"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-name">
                    {t("contact_page.name")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder={t("form.enter_field", {
                      field: t("contact_page.name"),
                    })}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-form-message">
                  {t("contact_page.message")}
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="contact-form-message"
                    placeholder={t("form.enter_field", {
                      field: t("contact_page.message"),
                    })}
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value?.length}/500{" "}
                      {t("contact_page.character").toLowerCase()}
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <FieldDescription>
                  {t("contact_page.message_field_desc")}
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field orientation="horizontal" className="mt-6">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          {t("buttons.clear")}
        </Button>

        <Button type="submit" form="contact-form" disabled={loading}>
          {loading && <Spinner />}
          {t("buttons.submit")}
        </Button>
      </Field>
    </div>
  );
}
