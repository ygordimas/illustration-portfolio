"use client";

import React from "react";
import { motion } from "framer-motion";

function StarSVG({ points, color, size, props }) {
  const svgStyle = `${size} stroke-[20px] overflow-visible stroke-myblue-950`;

  return (
    <>
      {points == "16" ? (
        <motion.svg className={svgStyle} viewBox="0 0 512 512" {...props}>
          <path d="m256 0 34.68 81.67 63.29-62.18.78 88.72 82.27-33.23-33.23 82.27 88.72.78-62.18 63.29L512 256l-81.67 34.68 62.18 63.29-88.72.78 33.23 82.27-82.27-33.23-.78 88.72-63.29-62.18L256 512l-34.68-81.67-63.29 62.18-.78-88.72-82.27 33.23 33.23-82.27-88.72-.78 62.18-63.29L0 256l81.67-34.68-62.18-63.29 88.72-.78-33.23-82.27 82.27 33.23.78-88.72 63.29 62.18L256 0z" />
        </motion.svg>
      ) : (
        <motion.svg className={svgStyle} viewBox="0 0 510.68 510.68" {...props}>
          <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
        </motion.svg>
      )}
    </>
  );
}

export default StarSVG;
