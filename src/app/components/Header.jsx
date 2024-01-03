"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineVerticalAlignMiddle,
  AiFillStar,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import NavMenuButton from "./NavMenuButton";
import NavMenuLinks from "./NavMenuLinks";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Contact", href: "/contact" },
    { title: "Resources", href: "/resources" },
    { title: "GitHub", href: "http://github.com/ygordimas" },
    { title: "Linkedin", href: "http://linkedin.com/ygordimas" },
  ];

  const menuVars = {
    // initial: {
    //   scaleY: 0,
    // },
    // animate: {
    //   scaleY: 1,
    //   transition: {
    //     duration: 0.5,
    //     ease: [0.12, 0, 0.39, 0],
    //   },
    // },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delay: 1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const starVars = {
    initial: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const hamburgerVars = {
    hide: {
      opacity: 0,
      scale: 0.5,
      rotate: 180,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  };

  const bgVariant = {
    hidden: {
      scale: 0,
      y: "-50%",
      x: "-50%",
      transition: { delay: 0.25, duration: 0.6 },
    },
    show: {
      scale: 0.2,
      y: "-50%",
      x: "-50%",
      transition: { duration: 0.25 },
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative z-10 flex w-full flex-col items-center justify-between gap-2 bg-primary-400 px-8 md:flex-row  md:gap-1">
        <div className="flex h-full w-full items-center justify-between py-8">
          <div className="flex cursor-default flex-col items-center">
            <Link href={"/"}>
              <h1
                className={`font-display text-4xl tracking-wide text-primary-100 md:text-4xl xl:text-5xl`}
              >
                YGOR DIMAS
              </h1>
            </Link>

            <h2 className="text-xl font-normal text-primary-300 sm:hidden lg:block">
              ILLUSTRATOR & 3D ARTIST
            </h2>
          </div>

          <NavMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </header>
      <NavMenuLinks isOpen={isOpen} handleOpen={toggleMenu} />
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
