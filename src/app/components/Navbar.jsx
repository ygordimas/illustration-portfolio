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

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Contact", href: "/contact" },
    { title: "Resources", href: "/resources" },
    { title: "GitHub", href: "http://github.com/ygordimas" },
    { title: "Linkedin", href: "http://linkedin.com/ygordimas" },
  ];

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
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
      opacity: 0,
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
      rotate: -180,
      transition: {
        duration: 0.4,
        delay: 0.8,
      },
    },
  };

  // const CustomizedLink = (title, href) => {
  //   return (
  //     <Link
  //       href={href}
  //       className={`relative rounded-full border-2 p-2 px-4 text-2xl md:text-xl ${
  //         pathname === `${href}`
  //           ? "box-border border-accent-500 bg-accent-50 font-normal tracking-normal text-accent-500"
  //           : "border-primary-50 font-light tracking-wide text-primary-500 hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-2 hover:before:w-full hover:before:bg-accent-500"
  //       }`}
  //     >
  //       {title}
  //     </Link>
  //   );
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 flex w-full items-center justify-between gap-2 bg-primary-500 p-8 md:flex-row  md:gap-1">
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

      <AnimatePresence>
        <motion.button
          variants={hamburgerVars}
          animate={isOpen ? "hide" : "show"}
          initial={false}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.09 },
          }}
          className="flex items-center text-5xl text-primary-100"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </motion.button>
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 flex h-full w-full origin-top bg-primary-500 p-10 text-primary-100"
          >
            <div className="flex h-full w-full flex-col">
              <motion.div
                variants={starVars}
                initial="initial"
                animate="show"
                exit="initial"
                className="flex justify-between text-2xl"
              >
                <div className="rounded-full bg-primary-50 text-4xl">
                  <AiFillStar className="p-2 text-primary-500" />
                </div>
                <button onClick={toggleMenu}>Close</button>
              </motion.div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex grow flex-col items-end justify-center font-bold"
              >
                <div className="flex grow flex-col items-end justify-center gap-4">
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden">
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-3xl tracking-wide"
                  >
                    <p className="cursor-default underline">
                      ygordimas@gmail.com
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
