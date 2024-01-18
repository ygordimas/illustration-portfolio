"use client";

import { motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TfiEye } from "react-icons/tfi";
import TileSVG from "../layout/TileSVG";

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

  return (
    <motion.div
      key="ribbon"
      className="relative mt-8 flex gap-2 self-end font-singoRound text-2xl text-myblue-950"
      variants={overlayVariant}
      initial="hide"
      ref={overlay}
    >
      <div className="relative z-10 flex h-fit w-fit  content-center">
        {/* <svg
          className="h-16 w-16 overflow-visible fill-mypink-400 stroke-myblue-800 stroke-[20px]"
          viewBox="0 0 510.68 510.68"
        >
          <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
        </svg> */}

        <TileSVG
          fillColor={`h-16 w-16 overflow-visible fill-myyellow-500 stroke-myblue-800 stroke-[20px]`}
        />
        <div className="z-5 absolute left-[50%] top-[50%] flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 content-center">
          <TfiEye className="z-10 block text-3xl text-myblue-800" />
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-[(calc(50%-1px))] rounded-full border-[6px] border-myblue-100"></div>
        </div>
      </div>
      <div className="-z-1 absolute left-0 top-0 h-16 w-16 rounded-full bg-myblue-100"></div>
      <motion.span
        variants={ribbonVariant}
        animate={isHovered ? "show" : "hide"}
        className="flex items-center justify-center rounded-l-full border-b-4 border-l-4 border-t-4 border-myblue-800 bg-mygreen-500 px-1 py-1 pl-4 uppercase tracking-wide text-myblue-950"
        transition={{ type: "tween" }}
      >
        <p className="rounded-full bg-myblue-100 px-3 font-mainfont font-light">
          Open
        </p>
      </motion.span>
    </motion.div>
  );
}

export default ViewOverlay;
