import { AnimatePresence, motion } from "framer-motion";
import ContactModalOverlay from "../../components/ContactModalOverlay";
import { useContactModalContext } from "../../context/ContactModalContext";
import ContactForm from "../../components/ContactForm";

export default function ContactModal() {
  const { openModal } = useContactModalContext();

  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center gap-2 p-2">
      <ContactForm />
      <AnimatePresence>
        {openModal ? <ContactModalOverlay /> : null}
      </AnimatePresence>
    </motion.div>
  );
}
