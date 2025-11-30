"use client";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <Container>
      <PageTitle title="İletişim" icon={<IconMail size="32" />} />
      <div className="mt-8 p-4 border-l-4 border-secondary bg-primary text-primary-foreground rounded-md">
        <strong className="text-secondary">Uyarı:</strong> Form gönderme işlemi henüz aktif değil.
        <br /> Lütfen bana e-posta ile ulaşın:{" "}
        <a
          href="mailto:mertmustehlik@hotmail.com"
          className="underline font-medium hover:text-yellow-900"
        >
          mertmustehlik@hotmail.com
        </a>
        .
        <br />
        En kısa sürede form aktif olacaktır.
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
    </Container>
  );
}
