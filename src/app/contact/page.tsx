import ContactForm from "@/components/ContactForm";

import Section from "@/components/Section";

// I want to add a title in head (meta title)
export const metadata = {
  title: "Contact us | Ecom store",
};

export default function Contact() {
  return (
    <Section>
      <h1 className="text-2xl font-bold text-center mb-10 uppercase">
        Contact us
      </h1>
      <ContactForm />
    </Section>
  );
}
