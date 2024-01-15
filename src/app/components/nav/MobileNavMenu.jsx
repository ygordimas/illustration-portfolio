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

function MobileNavMenu() {
  const { isOpen, setIsOpen } = useGlobalContext();
  const windowWidth = useWindowSize();

  const { scrollingProgress } = useScrollingContext();

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 h-[100vh] w-[100vw]">
        <div className="pointer-events-none absolute bottom-16 left-0 flex w-[100vw] justify-between border-2 border-red-500 px-16 text-2xl">
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
