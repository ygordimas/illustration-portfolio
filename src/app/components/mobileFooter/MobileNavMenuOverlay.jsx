import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion";
import NavMenuLinks from "../header/NavMenuLinks";

function MobileNavMenuOverlay({ isOpen }) {
  const [container, animate] = useAnimate();

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
    if (isOpen) {
      handleEnter();
    } else {
      handleExit();
    }
  }, [isOpen]);

  const numberOfColumns = 7;

  const pinkBgVariant = {
    initial: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={container}
        key="bg"
        className="pointer-events-none fixed left-0 top-0 flex h-[100vh] w-[100vw]"
      >
        {[...Array(numberOfColumns)].map((_, i) => {
          return (
            <motion.div
              initial={{}}
              className="relative top-[-125%] h-[125%] w-full rounded-b-full rounded-t-none bg-myblue-500"
              key={i}
            />
          );
        })}

        <NavMenuLinks />
      </motion.div>
    </AnimatePresence>
  );
}

export default MobileNavMenuOverlay;
