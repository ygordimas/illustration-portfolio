"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import TextEffect from "../layout/TextEffect";
import getUppercaseTitle from "@/app/utils/getUppercaseTitle";

function TitleOverlay({ path, isHovered, isInView, windowWidth }) {
  const [titleOverlay, animate] = useAnimate();

  const overlayVariant = {
    hide: {
      opacity: 0,
      x: "-80%",
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        type: "tween",
      },
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.2,
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        type: "tween",
      },
    },
  };

  useEffect(() => {
    if (isInView && windowWidth < 1024) {
      animate(
        titleOverlay.current,
        overlayVariant.show,
        overlayVariant.show.transition,
      );
    } else {
      animate(
        titleOverlay.current,
        overlayVariant.hide,
        overlayVariant.hide.transition,
      );
    }
  }, [isInView, windowWidth]);

  return (
    <motion.div
      key="overlay"
      className="h-fit w-fit rounded-tr-full border-r-4 border-t-4 border-myblue-950 bg-mygreen-500 py-1 pl-2 pr-6"
      initial="hide"
      animate={isHovered ? "show" : "hide"}
      variants={overlayVariant}
      ref={titleOverlay}
    >
      <TextEffect text={getUppercaseTitle(path)} size={`text-2xl`} />
    </motion.div>
  );
}

export default TitleOverlay;
