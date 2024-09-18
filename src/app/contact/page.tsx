import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";

import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section>
      <h1 className="text-2xl font-bold text-center mb-10 uppercase">
        Contact us
      </h1>
      <ContactForm />
      {/* Toaster is used to display success messages on form submission */}
      <Toaster />
    </Section>
  );
}
