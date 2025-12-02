import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { IconMail } from "@tabler/icons-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "İletişim | Mert MÜSTEHLİK",
};

export default function Contact() {
    const t = useTranslations("contact_page");
  
  return (
    <Container>
      <PageTitle title={t("contact")} icon={<IconMail size="32" />} />
      <div className="mt-8">
        <ContactForm />
      </div>
    </Container>
  );
}
