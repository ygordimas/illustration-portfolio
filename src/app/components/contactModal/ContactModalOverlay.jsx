import { useContactModalContext } from "../../context/ContactModalContext";
import React from "react";
import { motion, useAnimate, AnimatePresence, stagger } from "framer-motion";

function ContactModalOverlay() {
  const [container, animate] = useAnimate();
  const { openModal } = useContactModalContext();

  const numberOfColumns = 10;

  const panelsVariant = {
    enter: (i) => ({
      bottom: "25%",
      transition: { duration: 0.4, delay: 0.05 * i },
    }),
    exit: (i) => ({
      bottom: "-200%",
      transition: { duration: 0.5, delay: 0.1 / i },
    }),
  };

  return (
    <motion.div
      ref={container}
      key="bg"
      transition={{}}
      className="pointer-events-none fixed left-0 top-0 -z-50 flex h-[100vh] w-[100vw]"
    >
      <AnimatePresence>
        {openModal &&
          [...Array(numberOfColumns)].map((_, i) => {
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
      </AnimatePresence>
    </motion.div>
  );
}

export default ContactModalOverlay;
