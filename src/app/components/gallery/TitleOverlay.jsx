"use client";

import React from "react";
import { motion } from "framer-motion";
import TextEffect from "../layout/TextEffect";
import getUppercaseTitle from "@/app/utils/getUppercaseTitle";

function TitleOverlay({ path, isHovered, isInView, windowWidth }) {
  const overlayTransition = {
    duration: 0.4,
    ease: [0.5, 1, 0.89, 1],
    type: "tween",
  };
  return (
    <motion.div
      key="overlay"
      transition={overlayTransition}
      className="h-fit w-fit rounded-tr-full bg-mygreen-500 py-1 pl-2 pr-6"
    >
      <TextEffect text={getUppercaseTitle(path)} size={`text-2xl`} />
    </motion.div>
  );
}

export default TitleOverlay;
