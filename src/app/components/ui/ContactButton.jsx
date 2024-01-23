"use client";

import React from "react";
import { motion, useAnimate } from "framer-motion";
import { useContactModalContext } from "../../context/ContactModalContext";
import { LiaGrinWink, LiaHandPeace } from "react-icons/lia";
import ButtonBase from "./ButtonBase";
import useWindowSize from "../../hooks/useWindowSize";

export default function ContactButton({ styles }) {
  const windowsWidth = useWindowSize();
  const { setOpenModal } = useContactModalContext();

  const [winkScope, winkAnimate] = useAnimate();
  const [handScope, handAnimate] = useAnimate();

  const handleEnterAnimation = () => {
    winkAnimate(winkScope.current, winkVariant.animate, winkDuration);
    handAnimate(handScope.current, handVariant.animate, handDuration.enter);
  };

  const handleExitAnimation = () => {
    winkAnimate(winkScope.current, winkVariant.initial, winkDuration);
    handAnimate(handScope.current, handVariant.initial, handDuration.exit);
  };

  const winkVariant = {
    initial: {
      top: "400%",
      opacity: 0,
      scale: 0.2,
      x: "-20%",
      y: "-40%",
    },
    animate: {
      top: "0",
      opacity: 1,
      scale: 1,
      x: "-80%",
      y: "-25%",
    },
  };

  const winkDuration = {
    duration: 0.2,
  };

  const handVariant = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const handDuration = {
    enter: {
      duration: 0.2,
      delay: 0.1,
    },
    exit: {
      duration: 0.1,
    },
  };

  return (
    <motion.div
      key="contact"
      className="flex"
      onHoverStart={() => handleEnterAnimation()}
      onHoverEnd={() => handleExitAnimation()}
    >
      <ButtonBase label="Contact" onClick={() => setOpenModal(true)}>
        <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full">
          <motion.div
            ref={winkScope}
            className="absolute left-0 -translate-x-[80%] -translate-y-[50%] rounded-full bg-yellow-400 text-4xl text-myblue-800"
            variants={winkVariant}
            initial="initial"
          >
            <LiaGrinWink />
          </motion.div>
          <motion.div
            ref={handScope}
            variants={handVariant}
            initial="initial"
            className="absolute left-0.5 top-1 rounded-full bg-yellow-400 text-2xl text-myblue-800"
          >
            <LiaHandPeace />
          </motion.div>
        </div>
      </ButtonBase>
    </motion.div>
  );
}

{
  /* <div className="absolute left-0 top-0 -translate-x-[80%] -translate-y-[50%] rounded-full bg-yellow-400 text-4xl text-myblue-800">
<LiaGrinWink />
</div>
<div className="absolute left-0 top-0 rounded-full bg-yellow-400 text-2xl text-myblue-800">
<LiaHandPeace />
</div> */
}
