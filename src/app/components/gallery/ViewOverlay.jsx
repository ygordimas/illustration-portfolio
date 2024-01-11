"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiOutlineEye } from "react-icons/ai";

function ViewOverlay({ isHovered, isInView, windowWidth }) {
  const eyeDesktop = useRef(null);

  return (
    <motion.div
      key="ribbon"
      className="relative flex gap-2 self-end pt-8 font-singoRound  text-2xl lg:items-center lg:justify-center"
      ref={eyeDesktop}
    >
      <motion.span className=" text-myblue-950">
        <div className="relative flex h-fit w-fit content-center">
          <svg
            className="h-16 w-16 overflow-visible fill-myyellow-500 stroke-myblue-950 stroke-[20px]"
            viewBox="0 0 510.68 510.68"
          >
            <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
          </svg>
          <span className="z-5 absolute left-[50%] top-[50%] flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 content-center">
            <AiOutlineEye className="block" />
          </span>
        </div>
      </motion.span>
      <motion.p
        className="flex items-center justify-center rounded-l-full border-b-4 border-l-4 border-t-4 border-myblue-950 bg-mygreen-500 px-2 py-1 pl-6 uppercase tracking-wide text-myblue-950"
        transition={{ type: "tween" }}
      >
        View
      </motion.p>
    </motion.div>
  );
}

export default ViewOverlay;
