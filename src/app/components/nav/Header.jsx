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

  return (
    <>
      <header className="sticky top-2 z-10 w-full">
        <motion.div
          key="header"
          variants={headerVariants}
          animate={hideHeader ? "hide" : "show"}
          className="flex w-full items-center justify-between gap-2 rounded-full border-4 border-myblue-900 bg-accent-500 p-8"
          style={{
            boxShadow:
              "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
          }}
        >
          <div className="box-border flex  cursor-default flex-col items-center rounded-full border-[6px] border-myblue-950 bg-mypink-500 px-8 py-4 ">
            <Link className="relative " href={"/"}>
              <div className="z-3 whitespace-nowrap  font-singo text-8xl tracking-wider text-myblue-950">
                Ygor Dimas
              </div>
              <h1
                className={`z-5 absolute left-[-2px] top-[-2px] whitespace-nowrap font-singoShadow text-8xl tracking-wider text-myyellow-500`}
              >
                Ygor Dimas
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-between rounded-full">
            <NavMenu />
          </div>
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
