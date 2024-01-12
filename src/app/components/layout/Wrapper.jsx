"use client";

import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/store";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";
import StripesSVG from "./StripesSVG";

import { motion } from "framer-motion";

function Wrapper({ children }) {
  const wrapperRef = useRef(null);
  const { scrollY } = useScroll({
    container: wrapperRef,
  });
  const { scrollYProgress } = useScroll({ container: wrapperRef });

  const { setHideHeader, isOpen } = useGlobalContext();
  const { setScrollingProgress, setScrollToTop, scrollToTop } =
    useScrollingContext();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    setScrollingProgress(scrollYProgress.current);
  });

  useEffect(() => {
    if (scrollToTop) {
      wrapperRef.current.scrollTop = 0;
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  return (
    <div
      ref={wrapperRef}
      className="align-center relative flex h-full w-full flex-col overflow-y-scroll  px-2"
    >
      <div
        className="absolute left-0 top-0 h-1/2 w-full overflow-hidden"
        style={{
          mask: "linear-gradient(0deg, rgba(255,255,255,0) 45%, rgba(193,220,64,1) 100%)",
        }}
      >
        <StripesSVG />
      </div>

      {children}
    </div>
  );
}

export default Wrapper;
