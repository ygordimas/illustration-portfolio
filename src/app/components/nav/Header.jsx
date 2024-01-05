"use client";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavMenu from "./NavMenu";
import { useGlobalContext } from "../../context/store";
import { useEffect, useState } from "react";

export default function Header({}) {
  const { isOpen, setIsOpen } = useGlobalContext();
  const { hideHeader } = useGlobalContext();

  const headerVariants = {
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };

  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => console.log(latest));

  return (
    <>
      <header
        // layoutScroll
        // key="header"
        // variants={headerVariants}
        // animate={hidden ? "hide" : "show"}
        className="sticky top-2 z-10 w-full"
      >
        <motion.div
          key="header"
          variants={headerVariants}
          animate={hideHeader ? "hide" : "show"}
          className="flex w-full items-center justify-between gap-2 rounded-3xl bg-primary-400 p-8"
        >
          <div className="flex cursor-default flex-col items-center">
            <Link href={"/"}>
              <h1
                className={`font-display text-4xl tracking-tight text-primary-100 md:text-4xl xl:text-5xl`}
              >
                YGOR DIMAS
              </h1>
            </Link>

            <h2 className="text-xl font-normal text-primary-300 sm:hidden lg:block">
              ILLUSTRATOR & 3D ARTIST
            </h2>
          </div>
          <div className="flex items-center justify-between rounded-full bg-primary-50 p-2">
            {/* <div className="h-fit rounded-full bg-primary-500 p-2">Contact</div> */}
            <NavMenu />
          </div>
        </motion.div>
      </header>
      {/* <NavMenuLinks isOpen={isOpen} handleOpen={toggleMenu} /> */}
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
