import React from "react";
import { usePathname } from "next/navigation";
import { LiaHandPointUpSolid } from "react-icons/lia";
import Link from "next/link";
import { motion } from "framer-motion";

function HeaderButton({ label, href }) {
  const pathname = usePathname();

  const buttonVariant = {
    active: {
      backgroundColor: "#0698D6",
      borderColor: "rgba(2, 39, 55, 1)",
      transition: {
        duration: 0.4,
      },
    },
    inactive: {
      backgroundColor: "#C1DC40",
      borderColor: "var(--borderOpacity, rgba(2, 39, 55, 0))",
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonTransition = {
    duration: 0.4,
  };

  const littleHandVariant = {
    active: {
      opacity: 1,
      x: "-100%",
      y: "80%",
      rotate: "45deg",
    },
    inactive: {
      opacity: 0,
      x: "-200%",
      y: "80%",
      rotate: "45deg",
    },
  };

  const linkStyle =
    "relative rounded-full border-2 border-myblue-950 max-lg:[--borderOpacity:rgba(2,39,55,1)] [--borderOpacity:rgba(2,39,55,0)] px-4 py-2 font-singoRound text-2xl xl:text-2xl tracking-normal text-myblue-950 z-10";

  return (
    <Link href={href} className="relative h-fit w-fit">
      <motion.div
        className={linkStyle}
        variants={buttonVariant}
        animate={pathname == href ? "active" : "inactive"}
        initial={pathname == href ? "active" : "inactive"}
        whileHover={{
          borderColor: "rgba(2, 39, 55, 1)",
        }}
      >
        {label}
        <motion.div
          className={`${
            pathname == href ? `` : `hidden`
          } absolute bottom-0 left-1/2 flex items-center justify-center rounded-full border-4 border-myblue-950 bg-myyellow-500 p-1 text-2xl`}
          variants={littleHandVariant}
          initial={pathname == href ? "active" : "inactive"}
          animate={pathname == href ? "active" : "inactive"}
          transition={buttonTransition}
        >
          <LiaHandPointUpSolid />
        </motion.div>
      </motion.div>
      <motion.div className="-z-2 absolute -bottom-1 left-1 h-full w-full rounded-full bg-myyellow-500"></motion.div>
    </Link>
  );
}

export default HeaderButton;
