"use client";

import { useGlobalContext } from "../../context/GlobalContext";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";
import useWindowSize from "../../hooks/useWindowSize";

function MainContent({ children }) {
  const { isOpen } = useGlobalContext();
  const windowSize = useWindowSize();
  const { setIsScrolling } = useScrollingContext();
  const scrollArea = useRef();

  return (
    <AnimatePresence>
      <motion.main
        className="opacity-1 relative mb-[10rem] mt-12 flex grow items-center justify-center gap-1 xl:mt-14"
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
