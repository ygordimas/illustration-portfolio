"use client";

import { useGlobalContext } from "../../context/store";
import { useEffect, useRef } from "react";
import Footer from "../ui/Footer";
import ContactButton from "../ui/ContactButton";

import { motion, useAnimate } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

export default function MainContent({ children }) {
  const { isOpen } = useGlobalContext();
  const { scrollToTop, setScrollToTop } = useScrollingContext();
  const scrollArea = useRef();

  const mainStyles = `relative mt-2 flex grow flex-col items-center opacity-1`;

  return (
    <motion.main
      className={mainStyles}
      ref={scrollArea}
      animate={isOpen ? { opacity: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="grow">{children}</div>

      {/* <Footer /> */}
    </motion.main>
  );
}
