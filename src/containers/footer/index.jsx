import React from "react";
import SocialMedia from "../../components/SocialMedia";
import ContactButton from "../../components/Buttons/ContactButton";
import useWindowSize from "../../hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import { useContactModalContext } from "../../context/ContactModalContext";
import { useScrollingContext } from "../../context/ScrollingContext";
import { LiaGrinWink, LiaHandPeace } from "react-icons/lia";
import Stripes from "../../components/SVGComponents/Stripes";
import ScrollToTopButton from "../../components/Buttons/ScrollToTopButton";

function Footer() {
  const windowSize = useWindowSize();
  const { setOpenModal } = useContactModalContext();
  const { scrollingProgress, setScrollToTop, isScrolling } =
    useScrollingContext();

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-20 h-[100vh] w-[100vw]">
      <div
        className="pointer-events-auto absolute bottom-0 left-0 flex w-[100vw] justify-between px-16 py-8 pb-8 text-xl xl:text-2xl"
        style={{
          background:
            "linear-gradient(0deg, rgba(203,225,91,1) 0%, rgba(203,225,91,0.5) 70%, rgba(203,225,91,0) 100%)",
        }}
      >
        <div
          className="absolute left-0 top-0  h-full w-full"
          style={{
            mask: "linear-gradient(0deg, rgba(193,220,64,1) 0%, rgba(255,255,255,0) 70%, rgba(245,249,224,0) 100%)",
          }}
        >
          <Stripes color="bg-myblue-100" />
        </div>
        <div className="z-10 flex h-full w-full justify-between">
          <AnimatePresence mode="popLayout">
            <ContactButton key="contact" />

            <SocialMedia key="social" />

            {isScrolling && <ScrollToTopButton key="scroll" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Footer;
