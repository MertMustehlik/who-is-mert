"use client";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { IconMail } from "@tabler/icons-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle
        title={t("contact_page.contact")}
        icon={<IconMail size="32" />}
      />
      <div className="mt-8">
        <ContactForm />
      </div>
    </Container>
  );
}
