"use client";

import React, { useState } from "react";

import Link from "next/link";
import { TfiHandPointLeft, TfiHandPointRight } from "react-icons/tfi";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import { LiaHandPointLeft, LiaHandPointRight } from "react-icons/lia";
import { motion } from "framer-motion";
import Spike from "../../SVGComponents/Spike";

function NavigateProjectsButton({ path, direction }) {
  const buttonVariant = {
    animate: {
      scale: 1.06,
    },
    initial: {
      scale: 1,
    },
  };

  const svgVariant = {
    animate: {
      rotate: "180deg",
      x: `${direction == "left" ? "-50%" : "16px"}`,
      y: "-50%",
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
    initial: {
      x: `${direction == "left" ? "-50%" : "16px"}`,
      y: "-50%",
    },
  };

  return (
    <Link href={path} className="flex text-4xl">
      <motion.div
        className={`flex ${
          direction == "left" ? `flex-row` : `flex-row-reverse`
        } items-center p-2 font-singoRound`}
        whileHover="animate"
        whileTap={{
          scale: 0.8,
          transition: {
            ease: [0.64, 0, 0.78, 0],
          },
        }}
        initial="initial"
        variants={buttonVariant}
      >
        <div
          className={`${
            direction == "left" ? `rounded-l-full` : `rounded-r-full`
          } border-4 ${
            direction == "left" ? `border-r-0` : `border-l-0`
          } border-mypink-300 bg-myblue-100 p-1 text-myblue-800`}
        >
          {direction == "left" ? (
            <LiaHandPointLeft
              style={{
                filter: "drop-shadow(0px 2px 0 rgb(215, 233, 133))",
              }}
            />
          ) : (
            <LiaHandPointRight
              style={{
                filter: "drop-shadow(0px 2px 0 rgb(215, 233, 133))",
              }}
            />
          )}
        </div>
        <motion.span
          className={`relative box-border h-16 w-10 overflow-hidden ${
            direction == "left" ? `border-l-4` : `border-r-4`
          } border-mypink-300`}
        >
          <motion.svg
            className={`absolute top-1/2 h-10 w-10 -translate-y-1/2 fill-myyellow-500`}
            viewBox="0 0 510.68 510.68"
            variants={svgVariant}
          >
            <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
          </motion.svg>
        </motion.span>
      </motion.div>
    </Link>
  );
}

export default NavigateProjectsButton;
