import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavMenu({ isOpen, onClick }) {
  const burgerTopVariant = {
    open: {
      top: "50%",
      rotate: 45,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      top: "40%",
    },
  };

  const burgerBottomVariant = {
    open: {
      top: "50%",
      rotate: -45,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      top: "60%",
    },
  };

  const menuBgVariant = {
    close: {
      scale: 0,
      y: "-50%",
      x: "-50%",
      transition: { delay: 0.25, duration: 0.6 },
    },
    open: {
      scale: 3,
      y: "-50%",
      x: "-50%",
      transition: { duration: 0.6 },
    },
  };

  const size = "20";

  const buttonShadowVariant = {
    shadow: {
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <motion.div className={`relative h-${size} w-${size}`}>
      <motion.button
        animate={isOpen ? { boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)" } : {}}
        transition={{ duration: 1 }}
        onClick={onClick}
        className={`relative z-10 flex h-full w-full items-center justify-center rounded-full bg-primary-50`}
      >
        <motion.div
          layout
          key="top"
          variants={burgerTopVariant}
          animate={isOpen ? "open" : "close"}
          className="absolute top-[40%] h-[2px] w-[40%] bg-accent-500"
        ></motion.div>
        <motion.div
          layout
          key="bottom"
          variants={burgerBottomVariant}
          animate={isOpen ? "open" : "close"}
          className="absolute top-[60%] h-[2px] w-[40%] bg-accent-500"
        ></motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuBgVariant}
            key="menuBackground"
            initial="close"
            animate="open"
            exit="close"
            className="absolute left-[50%] top-[50%] h-[200vh] w-[200vh] rounded-full bg-primary-300"
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavMenu;
