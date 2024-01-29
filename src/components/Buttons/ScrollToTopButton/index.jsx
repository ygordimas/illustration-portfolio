"use client";

import React, { useState, forwardRef } from "react";
import { useScrollingContext } from "../../../context/ScrollingContext";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

import { motion } from "framer-motion";
import PrimaryNavButton from "../PrimaryNavButton";

const ScrollToTopButton = forwardRef((props, ref) => {
  const { setScrollToTop } = useScrollingContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleStartAnimation = () => {
    setIsHovered(true);
  };

  const handleStopAnimation = () => {
    setIsHovered(false);
  };

  const bgVariant = {
    initial: {
      top: "0.375rem",
      right: "-0.6rem",
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    animate: {
      top: "-0.375rem",
      right: "-0.6rem",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const arrowVariant = {
    initial: {
      scale: 0.5,
    },
    animate: {
      scale: [1, 0.5],
      transition: {
        duration: 0.4,
        repeat: Infinity,
      },
    },
    hide: {
      scale: 0,
      transition: {
        duration: 0.02,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      {...props}
      className="pointer-events-none relative flex"
      onHoverStart={() => handleStartAnimation()}
      onHoverEnd={() => handleStopAnimation()}
    >
      <PrimaryNavButton
        label="Scroll To Top"
        onClick={() => setScrollToTop(true)}
      />

      <motion.div
        className="absolute origin-top rounded-full border-2 border-myblue-800 bg-myyellow-400 p-1"
        variants={bgVariant}
        animate={isHovered ? "animate" : "initial"}
        initial="initial"
      >
        <motion.div
          className="text-2xl text-myblue-800"
          variants={arrowVariant}
          animate={isHovered ? "animate" : "hide"}
        >
          <TbArrowBigUpLineFilled />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default ScrollToTopButton;
