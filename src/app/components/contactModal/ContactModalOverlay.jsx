import { useContactModalContext } from "../../context/ContactModalContext";
import { useEffect } from "react";
import {
  motion,
  useAnimate,
  usePresence,
  AnimatePresence,
  stagger,
} from "framer-motion";

function ContactModalOverlay() {
  const { openModal } = useContactModalContext();
  const [container, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const numberOfColumns = 10;

  const handleEnter = async () => {
    await animate(
      "div",
      { top: "0%" },
      { duration: 0.2, delay: stagger(0.05, { from: "last" }) },
    );
  };

  const handleExit = async () => {
    await animate(
      "div",
      { top: "-125%" },
      { duration: 0.2, delay: stagger(0.05, { from: "first" }) },
    );
  };

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          "div",
          { bottom: "25%" },
          { duration: 0.4, delay: stagger(0.05, { from: "first" }) },
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          "div",
          { bottom: "-200%" },
          { duration: 0.4, delay: stagger(0.05, { from: "last" }) },
        );
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  const panelsVariant = {
    enter: (i) => ({
      bottom: "25%",
      transition: { duration: 0.4, delay: 0.05 * i },
    }),
    exit: (i) => ({
      bottom: "-200%",
      transition: { duration: 0.5, delay: 0.1 },
    }),
  };

  return (
    <motion.div
      ref={container}
      key="bg"
      transition={{}}
      className="pointer-events-none fixed left-0 top-0 -z-50 flex h-[100vh] w-[100vw]"
    >
      {[...Array(numberOfColumns)].map((_, i) => {
        return (
          <motion.div
            variants={panelsVariant}
            animate={openModal ? "enter" : "exit"}
            initial="exit"
            exit="exit"
            className="pointer-events-auto relative h-[125%] w-full rounded-t-full bg-myblue-500"
            key={i}
            custom={i}
          />
        );
      })}
    </motion.div>
  );
}

export default ContactModalOverlay;
