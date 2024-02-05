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

export default function Header() {
  const { setListType, hideHeader } = useGlobalContext();
  const windowsWidth = useWindowSize();

  const headerVariants = {
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };

  return (
    <header className="sticky top-2 z-20 flex  w-full">
      <motion.div
        key="header"
        variants={headerVariants}
        animate={hideHeader ? "hide" : "show"}
        className="relative flex h-fit w-full flex-col  max-xl:gap-4 xl:flex-row"
      >
        <div className="relative flex h-[5vh] w-full cursor-default justify-start">
          <div className="h-full w-auto ">
            <LogoZaltys />
          </div>

          {/* <div className="absolute bottom-0 left-1/2 h-fit -translate-x-1/2 translate-y-[80%] rounded-full bg-mypink-300 px-2 font-singo text-base tracking-wider text-myblue-800">
              <p>3D artist & illustrator</p>
            </div> */}
        </div>
        <div className="flex w-auto grow items-center gap-2 max-xl:justify-center xl:justify-end">
          <Link href={"/gallery/illustrations"}>
            <PrimaryNavButton label="Illustrations" />
          </Link>
          <Link href={"/gallery/abstracts"}>
            <PrimaryNavButton label="abstracts" />
          </Link>
          <Link href={"/gallery/gameart"}>
            <PrimaryNavButton label="gameart" />
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
