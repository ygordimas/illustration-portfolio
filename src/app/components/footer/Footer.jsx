import React from "react";
import SocialMedia from "../ui/SocialMedia";
import StripesSVG from "../layout/StripesSVG";
import ContactButton from "../ui/ContactButton";
import GoToTopButton from "../ui/GoToTopButton";
import useWindowSize from "../../hooks/useWindowSize";
import { AnimatePresence } from "framer-motion";
import MobileNavMenu from "../mobileFooter/MobileNavMenu";
import ButtonBase from "../ui/ButtonBase";
import { useContactModalContext } from "../../context/ContactModalContext";
import { useScrollingContext } from "../../context/ScrollingContext";

function Footer() {
  const windowSize = useWindowSize();
  const { setOpenModal } = useContactModalContext();
  const { scrollingProgress, setScrollToTop } = useScrollingContext();

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-20 h-[100vh] w-[100vw]"
        // style={{
        //   background:
        //     "linear-gradient(0deg, rgba(203,225,91,1) 0%, rgba(203,225,91,0) 75%, rgba(203,225,91,0) 100%)",
        // }}
      >
        <div
          className="pointer-events-auto absolute bottom-0 left-0 flex w-[100vw] justify-between px-16 py-8 pb-8 text-2xl"
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
            <StripesSVG color="bg-mygreen-300" />
          </div>
          <div className="z-10 flex h-full w-full justify-between">
            <AnimatePresence mode="popLayout">
              <ButtonBase
                key="contact"
                label="Contact"
                onClick={() => setOpenModal(true)}
              />
              <SocialMedia key="social" />

              <ButtonBase
                key="scrollUp"
                label="Scroll To Top"
                onClick={() => setScrollToTop(true)}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

const footerButtonStyles =
  "pointer-events-auto font-singoRound flex cursor-pointer items-center gap-2 rounded-full border-[4px] border-mypink-300 bg-myblue-100 px-8 text-2xl shadow-[2px_2px_0_0_rgb(248,145,158)] lg:text-2xl";
