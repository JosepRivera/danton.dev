import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Josep Rivera",
  description:
    "Get in touch with Josep Rivera, Backend Developer. Available for projects and internships.",
  openGraph: {
    title: "Contact — Josep Rivera",
    description:
      "Get in touch with Josep Rivera, Backend Developer. Available for projects and internships.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
