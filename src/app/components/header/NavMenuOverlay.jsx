import React from "react";
import { useGlobalContext } from "../../context/store";
import { AnimatePresence, motion } from "framer-motion";

function NavMenuOverlay() {
  const { isOpen } = useGlobalContext();

  const overlayVariant = {
    hide: {
      scaleY: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariant}
            initial="hide"
            animate="show"
            exit="hide"
            className="fixed left-0 top-0 m-0 h-[100vh] w-[100vw] origin-top scale-y-0 bg-myblue-500 p-0"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavMenuOverlay;
