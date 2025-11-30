import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { IconMail } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Mert MÜSTEHLİK",
};

export default function Contact() {
  return (
    <Container>
      <PageTitle title="İletişim" icon={<IconMail size="32" />} />
      <div className="mt-8">
        <ContactForm />
      </div>
    </Container>
  );
}
