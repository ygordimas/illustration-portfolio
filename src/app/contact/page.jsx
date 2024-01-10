import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function ContactPage() {
  return (
    <>
      <div className="relative h-fit w-fit">
        <ContactHeading />
        <ContactForm />
      </div>
    </>
  );
}
