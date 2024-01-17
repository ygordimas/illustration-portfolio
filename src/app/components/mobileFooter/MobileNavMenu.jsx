"use client";

import React from "react";
import NavMenuButton from "../header/NavMenuButton";
import { useGlobalContext } from "../../context/store";
import MobileNavMenuOverlay from "./MobileNavMenuOverlay";
import NavMenuLinks from "../header/NavMenuLinks";
import MobileNavContactCTA from "./MobileNavContactCTA";
import GoToTopButton from "../ui/GoToTopButton";
import StripesSVG from "../layout/StripesSVG";
import ContactButton from "../ui/ContactButton";

function MobileNavMenu() {
  const { isOpen, setIsOpen } = useGlobalContext();

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
          <ContactButton />
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
