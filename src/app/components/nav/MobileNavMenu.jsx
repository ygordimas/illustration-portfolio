"use client";

import React from "react";
import NavMenuButton from "./NavMenuButton";
import { useGlobalContext } from "../../context/store";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavMenuOverlay from "./MobileNavMenuOverlay";
import { AnimatePresence } from "framer-motion";
import NavMenuLinks from "./NavMenuLinks";
import MobileNavContactCTA from "./MobileNavContactCTA";
import GoToTopButton from "../ui/GoToTopButton";
import { useScrollingContext } from "../../context/ScrollingContext";
import StripesSVG from "../layout/StripesSVG";

function MobileNavMenu() {
  const { isOpen, setIsOpen } = useGlobalContext();
  const windowWidth = useWindowSize();

  const { scrollingProgress } = useScrollingContext();

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-20 h-[100vh] w-[100vw]">
        <div className="pointer-events-none absolute bottom-0 left-0 flex w-[100vw] justify-between px-16 pb-4 text-2xl">
          <div
            className="absolute left-0 top-0 -z-20 h-full w-full"
            style={{
              mask: "linear-gradient(0deg, rgba(193,220,64,1) 0%, rgba(255,255,255,0) 75%, rgba(245,249,224,0) 100%)",
            }}
          >
            <StripesSVG color="bg-mygreen-500" />
          </div>
          <MobileNavContactCTA />
          <GoToTopButton />
          <NavMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && <NavMenuLinks isOpen={isOpen} handleOpen={setIsOpen} />}

        <MobileNavMenuOverlay isOpen={isOpen} />
      </div>
    </>
  );
}

export default MobileNavMenu;
