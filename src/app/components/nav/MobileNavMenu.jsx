"use client";

import React from "react";
import NavMenuButton from "./NavMenuButton";
import { useGlobalContext } from "../../context/store";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavMenuOverlay from "./MobileNavMenuOverlay";
import { AnimatePresence } from "framer-motion";
import NavMenuLinks from "./NavMenuLinks";

function MobileNavMenu() {
  const { isOpen, setIsOpen } = useGlobalContext();
  const windowWidth = useWindowSize();

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 h-[100vh] w-[100vw]">
        <div className="pointer-events-auto absolute bottom-16 right-16">
          <NavMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && <NavMenuLinks isOpen={isOpen} handleOpen={setIsOpen} />}

        <MobileNavMenuOverlay isOpen={isOpen} />
      </div>
    </>
  );
}

export default MobileNavMenu;
