// @ts-nocheck
"use client";

import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context/GlobalContext";
import { usePathname } from "next/navigation";
import useWindowSize from "../../hooks/useWindowSize";

import LogoZaltys from "../../components/SVGComponents/LogoZaltys";

import PrimaryNavButton from "../../components/Buttons/PrimaryNavButton";

function Header() {
  const pathname = usePathname();
  const { hideHeader } = useGlobalContext();
  const windowsWidth = useWindowSize();

  const headerVariants = {
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };

  return (
    <header className="sticky top-2 z-20 flex h-fit w-full ">
      <motion.div
        key="header"
        variants={headerVariants}
        initial="show"
        animate={hideHeader ? "hide" : "show"}
        className="relative flex h-auto w-full grow flex-col max-xl:gap-4 xl:flex-row"
      >
        <Link
          href={"/"}
          className="relative flex h-auto w-full cursor-pointer justify-start"
        >
          <div className="-z-20 box-content flex h-full w-auto items-center justify-center rounded-full bg-mypink-200 p-4">
            <LogoZaltys />
            {/* <p className="font-mainfont text-6xl font-semibold">Ygor Dimas</p> */}
          </div>
        </Link>

        {/* <div className="absolute bottom-0 left-1/2 h-fit -translate-x-1/2 translate-y-[80%] rounded-full bg-mypink-300 px-2 font-singo text-base tracking-wider text-myblue-800">
              <p>3D artist & illustrator</p>
            </div> */}
        {pathname != "/" && (
          <div className="flex w-auto grow items-center gap-2 max-xl:justify-center xl:justify-end">
            <Link href={"/gallery/illustrations"}>
              <PrimaryNavButton label="Illustrations" />
            </Link>
            <Link href={"/gallery/gameart"}>
              <PrimaryNavButton label="game art" />
            </Link>
            <Link href={"/gallery/abstracts"}>
              <PrimaryNavButton label="abstracts" />
            </Link>
          </div>
        )}
      </motion.div>
    </header>
  );
}

export default Header;
