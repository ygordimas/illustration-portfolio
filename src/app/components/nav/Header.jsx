"use client";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavMenu from "./NavMenu";
import HeaderButton from "./HeaderButton";
import { useGlobalContext } from "../../context/store";
import { useEffect, useState } from "react";
import StripesSVG from "../../components/layout/StripesSVG";
import { usePathname } from "next/navigation";
import MobileNavMenu from "./MobileNavMenu";

export default function Header({}) {
  const { isOpen, setIsOpen } = useGlobalContext();
  const { hideHeader } = useGlobalContext();

  const headerVariants = {
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };

  return (
    <>
      <header className="sticky top-2 z-20 w-full">
        <motion.div
          key="header"
          variants={headerVariants}
          animate={hideHeader ? "hide" : "show"}
          className="relative flex w-full items-center justify-center gap-8 rounded-full border-4 border-myblue-900 bg-accent-500 p-8 lg:justify-between"
          style={{
            boxShadow:
              "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
          }}
        >
          <div className="relative box-border flex cursor-default flex-col items-center rounded-full border-[6px] border-myblue-950 bg-mypink-500 px-8 py-4 ">
            <Link className="relative " href={"/"}>
              <div className="z-3 whitespace-nowrap  p-2 font-display text-7xl tracking-tight text-myblue-950">
                Ygor Dimas
              </div>
              {/* <h1
                className={`z-5 absolute left-[-2px] top-[-2px] whitespace-nowrap font-singoShadow text-8xl tracking-wider text-myyellow-500`}
              >
                Ygor Dimas
              </h1> */}
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-myblue-950 bg-myyellow-500 font-singoRound text-xl tracking-wide text-myblue-950 max-lg:top-0 lg:bottom-0 lg:translate-y-1/2">
              <p className="px-4 py-1">3D ARTIST & ILLUSTRATOR</p>
            </div>
          </div>

          {/* *****MOBILE HEADER BUTTONS***** */}
          <div className="flex grow items-center justify-end  gap-2 max-lg:absolute max-lg:bottom-0 max-lg:translate-y-1/2 lg:h-full">
            <HeaderButton label="Illustrations" href={"/"} />
            <HeaderButton label="Game Art" href={"/game-art"} />
            <HeaderButton label="Abstract Art" href={"/abstract-art"} />
          </div>
          {/* *****MOBILE HEADER BUTTONS***** */}

          {/* *****DESKTOP HEADER BUTTONS***** */}
          {/* <div className="hidden grow justify-end gap-2 lg:flex lg:flex-row">
            <HeaderButton label="Illustrations" href={"/"} />
            <HeaderButton label="Game Art" href={"/game-art"} />
            <HeaderButton label="Abstract Art" href={"/abstract-art"} />
          </div> */}
          {/* *****DESKTOP HEADER BUTTONS***** */}

          <div className="hidden items-center justify-between rounded-full lg:flex">
            <NavMenu />
          </div>

          <MobileNavMenu />
        </motion.div>
      </header>
    </>
  );
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-6xl">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
