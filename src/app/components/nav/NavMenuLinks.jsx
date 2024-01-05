import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavMenuLinks({ isOpen, handleOpen }) {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "Resources", href: "/resources" },
    { title: "GitHub", href: "http://github.com/ygordimas" },
    { title: "Linkedin", href: "http://linkedin.com/ygordimas" },
    { title: "Instagram", href: "http://instagram.com/ygordimas" },
  ];

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

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="pointer-events-none fixed left-0 top-0 z-20 flex h-[100vh] w-[100vw] flex-col items-end justify-end overflow-hidden p-8 font-mainfont font-medium"
        >
          <div className="flex grow flex-col items-end justify-center gap-4">
            {navLinks.map((link, index) => {
              if (link.href == pathname) {
                return;
              } else {
                return (
                  <div
                    onClick={handleOpen}
                    className="pointer-events-auto  overflow-hidden"
                  >
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="pointer-events-auto overflow-hidden">
            <motion.div
              variants={mobileLinkVars}
              className="text-3xl tracking-wide underline"
              onClick={() => handleOpen()}
            >
              Close
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavMenuLinks;

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
    <motion.div variants={mobileLinkVars} className="py-1.5 text-6xl">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
