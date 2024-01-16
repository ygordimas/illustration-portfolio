"use client";

import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/store";
import { useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";
import StripesSVG from "./StripesSVG";
import Footer from "../../components/footer/Footer";

import { motion } from "framer-motion";
import ContactModal from "../contactModal/ContactModal";
import { useContactModalContext } from "@/app/context/ContactModalContext";

function Wrapper({ children }) {
  const wrapperRef = useRef(null);
  const { scrollY } = useScroll({
    container: wrapperRef,
  });
  const { scrollYProgress } = useScroll({ container: wrapperRef });

  const { setHideHeader, isOpen } = useGlobalContext();
  const { setScrollingProgress, setScrollToTop, scrollToTop } =
    useScrollingContext();
  const { openModal, setOpenModal } = useContactModalContext();

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
  }, [scrollToTop, openModal]);

  return (
    <div
      ref={wrapperRef}
      className="align-center relative flex h-full w-full flex-col overflow-y-scroll  px-2"
    >
      <div
        className="absolute left-0 top-0 h-1/2 w-full overflow-hidden"
        style={{
          mask: "linear-gradient(0deg, rgba(255,255,255,0) 42%, rgba(245,249,224,1) 53%, rgba(193,220,64,1) 100%)",
        }}
      >
        <StripesSVG color="bg-myblue-100" />
      </div>

      {children}

      {openModal && <ContactModal />}

      {/* <Footer /> */}
    </div>
  );
}

export default Wrapper;
