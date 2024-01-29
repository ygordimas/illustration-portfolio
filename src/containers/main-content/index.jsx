"use client";

import { useGlobalContext } from "../../context/GlobalContext";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

function MainContent({ children }) {
  const { isOpen } = useGlobalContext();
  const scrollArea = useRef();

  const mainStyles = `relative mt-12 flex grow flex-col items-center justify-center opacity-1 mb-[10rem] xl:mt-14`;

  return (
    <AnimatePresence>
      <motion.main
        className={mainStyles}
        ref={scrollArea}
        animate={isOpen ? { opacity: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default MainContent;
