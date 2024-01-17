"use client";

import { useGlobalContext } from "../../context/store";
import { useEffect, useRef } from "react";
import ContactButton from "../ui/ContactButton";

import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

export default function MainContent({ children }) {
  const { isOpen } = useGlobalContext();
  const { scrollToTop, setScrollToTop } = useScrollingContext();
  const scrollArea = useRef();

  const mainStyles = `relative flex pt-8 grow flex-col items-center justify-center opacity-1 mb-[10rem] mt-10 lg:mt-2`;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.main
          className={mainStyles}
          ref={scrollArea}
          animate={isOpen ? { opacity: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {children}

          {/* <Footer /> */}
        </motion.main>
      )}
    </AnimatePresence>
  );
}
