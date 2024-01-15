import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

export default function ContactPage() {
  return (
    <>
      <div className="relative h-fit w-[60vw]">
        <ContactHeading />
        <ContactForm />
      </div>
    </>
  );
}
