"use client";

import React, { useState } from "react";
import ButtonBase from "./ButtonBase";
import { useScrollingContext } from "../../context/ScrollingContext";
import { LiaAngleUpSolid } from "react-icons/lia";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { TbArrowBigUpLines } from "react-icons/tb";

import { motion } from "framer-motion";

function ScrollToTop() {
  const { setScrollToTop } = useScrollingContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleStartAnimation = () => {
    setIsHovered(true);
    console.log("entered");
  };

  const handleStopAnimation = () => {
    setIsHovered(false);
    console.log("left");
  };

  const bgVariant = {
    initial: {
      top: "0.375rem",
      right: "0.2rem",
      scaleY: 0,
      opacity: 0,
    },
    animate: {
      top: "-0.375rem",
      right: "0.2rem",
      scaleY: 1,
      opacity: 1,
    },
  };

  const arrowVariant = {
    initial: (i) => ({
      top: `${0.5 * i}rem`,
      x: "-3px",

      scale: 0.4,
    }),
    animate: (i) => ({
      top: `${0.5 * i}rem`,
      x: "-3px",
      scale: [1, 0.4],
      transition: {
        duration: 0.6,
        delay: 0.2 * i,
        repeat: Infinity,
      },
    }),
    hide: (i) => ({
      top: `${0.5 * i}rem`,
      x: "-3px",

      scale: 0,
    }),
  };

  return (
    <>
      <motion.div
        key="scrollUp"
        className="pointer-events-none relative flex"
        onHoverStart={() => handleStartAnimation()}
        onHoverEnd={() => handleStopAnimation()}
      >
        <ButtonBase
          label="Scroll To Top"
          onClick={() => setScrollToTop(true)}
        />

        <motion.div
          className="absolute h-10 w-[24px] origin-top rounded-full bg-myyellow-400"
          variants={bgVariant}
          animate={isHovered ? "animate" : "initial"}
          initial="initial"
        >
          <motion.div className="text-lg text-myblue-800">
            <TbArrowBigUpLines />
          </motion.div>
          {/* {[...Array(3)].map((_, i) => {
            const dynamicClass = `absolute right-0 text-lg`;
            return (
              <motion.div
                key={i}
                className="absolute right-0 scale-0 text-lg"
                style={{
                  top: `${0.5 * i}rem`,
                }}
                custom={i}
                variants={arrowVariant}
                animate={isHovered ? "animate" : "hide"}
                initial="hide"
              >
                <TbArrowBadgeUpFilled />
              </motion.div>
            );
          })} */}
        </motion.div>
      </motion.div>
    </>
  );
}

export default ScrollToTop;
