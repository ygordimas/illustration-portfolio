import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarSVG from "../../components/layout/StarSVG";

function NavMenuButton({ isOpen, onClick }) {
  const burgerTopVariant = {
    open: {
      top: "50%",
      rotate: 45,
      transition: {
        duration: 0.5,
      },
      y: "-50%",
    },
    close: {
      top: "40%",
      y: "-50%",
    },
  };

  const burgerBottomVariant = {
    open: {
      top: "50%",
      rotate: -45,
      transition: {
        duration: 0.5,
      },
      y: "-50%",
    },
    close: {
      top: "60%",
      y: "-50%",
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
    <motion.button
      onClick={onClick}
      className={`text-myblue-500 relative z-10 flex h-fit w-fit items-center justify-center`}
    >
      {/* <svg
        className="stroke-myblue-950 h-24 w-24 fill-current stroke-[2px]"
        viewBox="0 0 63 60"
      >
        <path d="m31.4 59.6-5.7-9.5-9.4 5.9-.6-11.1-11.1.5 5.1-9.8L0 30.1l9.7-5.4-5.2-9.8 11.1.5.6-11.1 9.5 5.8L31.4.6l5.7 9.5 9.4-5.8.6 11 11.1-.5-5.1 9.8 9.7 5.5-9.7 5.5 5.2 9.8-11.1-.5-.6 11.1-9.5-5.9-5.7 9.5Z" />
      </svg> */}

      <StarSVG color={"fill-myblue-500"} size={"h-24 w-24"} />
      <motion.div
        layout
        key="top"
        variants={burgerTopVariant}
        animate={isOpen ? "open" : "close"}
        className="absolute top-[40%] h-[4px] w-[30%] rounded-full bg-accent-500"
      ></motion.div>
      <motion.div
        layout
        key="bottom"
        variants={burgerBottomVariant}
        animate={isOpen ? "open" : "close"}
        className="absolute top-[60%] h-[4px] w-[30%] rounded-full bg-accent-500"
      ></motion.div>
    </motion.button>
  );
}

export default NavMenuButton;
