"use client";

import { useGlobalContext } from "../../context/store";
import { useEffect, useRef } from "react";
import Footer from "../ui/Footer";
import ContactButton from "../ui/ContactButton";

import { motion, useAnimate } from "framer-motion";

export default function MainContent({ children }) {
  const { scrollToTop, setScrollToTop, isOpen } = useGlobalContext();
  const scrollArea = useRef();

  useEffect(() => {
    if (scrollToTop) {
      scrollArea.current.scrollTop = 0;
      setScrollToTop(false);
    }
  }, [scrollToTop]);

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
