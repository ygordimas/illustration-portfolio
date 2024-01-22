"use client";

import { motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TfiEye } from "react-icons/tfi";
import TileSVG from "../layout/TileSVG";
import Crown from "../SVGs/Crown";
import EightPoints from "../SVGs/EightPoints";

function ViewOverlay({ isHovered, isInView, windowWidth }) {
  const [overlay, animate] = useAnimate();

  useEffect(() => {
    if (isInView && windowWidth < 1024) {
      animate(
        overlay.current,
        overlayVariant.show,
        overlayVariant.show.transition,
      );
      animate("span", ribbonVariant.show, overlayVariant.show.transition);
    } else if (!isInView && windowWidth < 1024) {
      animate(
        overlay.current,
        overlayVariant.hide,
        overlayVariant.hide.transition,
      );
      animate("span", ribbonVariant.hide, overlayVariant.hide.transition);
    } else if (isHovered && windowWidth >= 1024) {
      animate(
        overlay.current,
        overlayVariant.show,
        overlayVariant.show.transition,
      );
      animate("span", ribbonVariant.show, overlayVariant.show.transition);
    } else {
      animate(
        overlay.current,
        overlayVariant.hide,
        overlayVariant.hide.transition,
      );
      animate("span", ribbonVariant.hide, overlayVariant.hide.transition);
    }
  }, [isInView, windowWidth, isHovered]);

  const ribbonVariant = {
    hide: {
      x: "100%",
    },
    show: {
      x: "0%",
    },
  };

  const overlayVariant = {
    hide: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  };

  const rotateVariant = {
    rotate: {
      rotate: "360deg",
    },
  };

  return (
    <motion.div
      key="ribbon"
      className="relative mt-8 flex gap-2 self-end font-singoRound text-2xl text-myblue-800"
      variants={overlayVariant}
      initial="hide"
      ref={overlay}
    >
      <div className="relative z-10 flex h-fit w-fit  content-center">
        <TileSVG
          fillColor={`h-16 w-16 overflow-visible fill-myyellow-500 stroke-myblue-800 stroke-[20px]`}
        />
        <div className="z-5 absolute left-[50%] top-[50%] flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 content-center">
          <TfiEye className="z-10 block text-3xl text-myblue-800" />
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-[(calc(50%-1px))] rounded-full">
            <EightPoints />
          </div>
        </div>
        <motion.div
          variants={rotateVariant}
          animate="rotate"
          className="absolute left-0 top-0 h-full w-full "
          transition={{
            ease: "linear",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Crown />
        </motion.div>
      </div>
      <div className="-z-1 absolute left-0 top-0 h-16 w-16 rounded-full"></div>
      <motion.span
        variants={ribbonVariant}
        animate={isHovered ? "show" : "hide"}
        className="flex items-center justify-center rounded-l-full border-b-4 border-l-4 border-t-4 border-myblue-800 bg-mygreen-500 px-1 py-1 pl-4 uppercase tracking-wide text-myblue-950"
        transition={{ type: "tween" }}
      >
        <p className="rounded-fullpx-3 font-singoRound text-myblue-800">Open</p>
      </motion.span>
    </motion.div>
  );
}

export default ViewOverlay;
