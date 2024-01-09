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
      top: "45%",
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
      top: "55%",
      y: "-50%",
    },
  };

  const buttonSVGVariant = {
    close: {
      fill: "#0698D6",
    },
    open: {
      fill: "#F56B7C",
      // backgroundColor: "#C1DC40",
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative z-10 flex h-fit w-fit items-center justify-center text-myblue-500`}
      // variants={buttonVariant}
      // initial="close"
      // animate="open"
      // transition={{ duration: 1 }}
    >
      <motion.svg
        className="stroke-myblue-950` h-24 w-24 overflow-visible stroke-[20px]"
        viewBox="0 0 512 512"
        variants={buttonSVGVariant}
        initial="close"
        animate={isOpen ? "open" : "close"}
        stroke="#022737"
      >
        <path d="m256 0 34.68 81.67 63.29-62.18.78 88.72 82.27-33.23-33.23 82.27 88.72.78-62.18 63.29L512 256l-81.67 34.68 62.18 63.29-88.72.78 33.23 82.27-82.27-33.23-.78 88.72-63.29-62.18L256 512l-34.68-81.67-63.29 62.18-.78-88.72-82.27 33.23 33.23-82.27-88.72-.78 62.18-63.29L0 256l81.67-34.68-62.18-63.29 88.72-.78-33.23-82.27 82.27 33.23.78-88.72 63.29 62.18L256 0z" />
      </motion.svg>

      <motion.div
        layout
        key="top"
        variants={burgerTopVariant}
        animate={isOpen ? "open" : "close"}
        className="absolute top-[45%] h-[4px] w-[30%] rounded-full bg-myyellow-400"
      ></motion.div>
      <motion.div
        layout
        key="bottom"
        variants={burgerBottomVariant}
        animate={isOpen ? "open" : "close"}
        className="absolute top-[55%] h-[4px] w-[30%] rounded-full bg-myyellow-400"
      ></motion.div>
    </motion.button>
  );
}

export default NavMenuButton;
