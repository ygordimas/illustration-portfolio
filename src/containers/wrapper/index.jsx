"use client";

import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";
import Footer from "../footer";

import { useContactModalContext } from "../../context/ContactModalContext";
import Stripes from "../../components/SVGComponents/Stripes";
import ContactModal from "../contact-modal";

const Wrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const { scrollY } = useScroll({
    container: wrapperRef,
  });
  const { scrollYProgress } = useScroll({ container: wrapperRef });

  const { setHideHeader, isOpen } = useGlobalContext();
  const {
    isScrolling,
    setIsScrolling,
    scrollingProgress,
    setScrollingProgress,
    setScrollToTop,
    scrollToTop,
  } = useScrollingContext();
  const { openModal, setOpenModal } = useContactModalContext();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 200) {
      setHideHeader(true);
      setIsScrolling(true);
    } else if (latest < previous) {
      setIsScrolling(false);

      setTimeout(() => {
        setHideHeader(false);
      }, 600);
    }
  });

  // useMotionValueEvent(scrollYProgress, "change", () => {
  //   setScrollingProgress(scrollYProgress.current);
  // });

  useEffect(() => {
    if (scrollToTop) {
      wrapperRef.current.scrollTop = 0;
      setScrollToTop(false);
    }
  }, [scrollToTop, openModal]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-full w-full flex-col overflow-y-scroll px-2"
    >
      {children}

      <ContactModal />
      <Footer />
    </div>
  );
};

export default Wrapper;
