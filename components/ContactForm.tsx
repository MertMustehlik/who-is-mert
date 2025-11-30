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

const formSchema = z.object({
  name: z.string().min(3, "Adınız en az 3 karakter uzunluğunda olmalıdır."),
  email: z.email("Geçersiz e-posta adresi."),
  message: z
    .string()
    .min(3, "Mesajınız en az 3 karakter uzunluğunda olmalıdır.")
    .max(500, "Mesajınız en fazla 500 karakter uzunluğunda olmalıdır."),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formStartTime] = useState(Date.now());

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
      toast.error(
        "Bot/Spam engellemesi nedeniyle formu göndermeden önce lütfen birkaç saniye bekleyin."
      );
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

      toast.success("Mesajınız başarıyla gönderildi!");
    } catch (error) {
      console.error("Mail gönderilirken hata oluştu:", error);
      toast.error("Üzgünüm, mesajınız gönderilemedi. Lütfen tekrar deneyin.");
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
                  <FieldLabel htmlFor="contact-form-name">Adınız</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ad soyad giriniz"
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
                  <FieldLabel htmlFor="contact-form-email">E-Posta</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="E-posta giriniz"
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
                  Mesajınız
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="contact-form-message"
                    placeholder="Mesajınızı yazınız"
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText className="tabular-nums">
                      {field.value?.length}/500 karakter
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <FieldDescription>
                  İletmek istediğiniz mesajı buraya yazabilirsiniz. Size mümkün
                  olan en kısa sürede dönüş yapmaya özen göstereceğim.
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
          Temizle
        </Button>

        <Button type="submit" form="contact-form" disabled={loading}>
          {loading && <Spinner />}
          Gönder
        </Button>
      </Field>
    </div>
  );
}
