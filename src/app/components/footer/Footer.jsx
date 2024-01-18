import React from "react";
import SocialMedia from "../ui/SocialMedia";
import StripesSVG from "../layout/StripesSVG";
import ContactButton from "../ui/ContactButton";
import GoToTopButton from "../ui/GoToTopButton";
import useWindowSize from "../../hooks/useWindowSize";
import { AnimatePresence } from "framer-motion";
import MobileNavMenu from "../mobileFooter/MobileNavMenu";

function Footer() {
  const windowSize = useWindowSize();
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
          className="pointer-events-none absolute bottom-0 left-0 flex w-[100vw] justify-between px-16 pb-8 text-2xl"
          style={{
            background:
              "linear-gradient(0deg, rgba(203,225,91,1) 0%, rgba(203,225,91,0.5) 50%, rgba(203,225,91,0) 100%)",
          }}
        >
          <div
            className="absolute left-0 top-0  h-full w-full"
            style={{
              mask: "linear-gradient(0deg, rgba(193,220,64,1) 0%, rgba(255,255,255,0) 50%, rgba(245,249,224,0) 100%)",
            }}
          >
            <StripesSVG color="bg-mygreen-300" />
          </div>
          <div className="z-10 flex h-full w-full justify-between">
            <AnimatePresence mode="popLayout">
              <ContactButton key="contact" styles={footerButtonStyles} />
              <SocialMedia key="social" />

              <GoToTopButton key="scrollUp" styles={footerButtonStyles} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* <MobileNavMenu /> */}
    </>
  );
}

export default Footer;

const footerButtonStyles =
  "pointer-events-auto font-singo flex cursor-pointer items-center gap-2 rounded-full border-[2px] border-myblue-800 bg-myblue-100 px-8 text-2xl shadow-[2px_2px_0_0_rgb(250,183,192)] lg:text-6xl";
