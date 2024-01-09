import ContactForm from "./ContactForm";
import { GiMailbox } from "react-icons/gi";

export default function ContactPage() {
  return (
    <>
      <GiMailbox className="text-6xl" />
      <ContactForm />
    </>
  );
}
