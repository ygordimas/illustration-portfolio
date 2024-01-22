import React from "react";
import { usePathname } from "next/navigation";
import { LiaHandPointUpSolid, LiaHandPointDownSolid } from "react-icons/lia";
import Link from "next/link";
import { motion } from "framer-motion";
import TextEffect from "../layout/TextEffect";

function HeaderLink({ label, href }) {
  const pathname = usePathname();

  const buttonVariant = {
    active: {
      backgroundColor: "#84D8FC",
      borderColor: "rgba(3, 67, 95, 1)",
      transition: {
        duration: 0.4,
      },
    },
    inactive: {
      backgroundColor: "#D6E77D",
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
      rotate: "125deg",
    },
    inactive: {
      opacity: 0,
      x: "-200%",
      y: "80%",
      rotate: "125deg",
    },
  };

  const linkStyle =
    "relative border-2 rounded-full border-myblue-800 max-xl:[--borderOpacity:rgba(3,67,95,1)] [--borderOpacity:rgba(2,39,55,0)] px-4 py-1 font-singoRound text-xl lg:text-2xl xl:text-3xl tracking-wide text-myblue-800 z-10 shadow-[2px_2px_0_0_rgb(250,183,192)]";

  return (
    <Link href={href} className="relative h-fit w-fit">
      <motion.div
        className={linkStyle}
        variants={buttonVariant}
        animate={pathname == href ? "active" : "inactive"}
        initial={pathname == href ? "active" : "inactive"}
        whileHover={{
          borderColor: "rgba(3, 67, 95, 1)",
        }}
      >
        {pathname == href ? <TextEffect text={label} size="inherit" /> : label}
        <motion.div
          className={`${
            pathname == href ? `` : `hidden`
          } absolute bottom-0 left-full flex items-center justify-center rounded-full border-2 border-myblue-800 bg-myyellow-500 p-1 text-2xl`}
          variants={littleHandVariant}
          initial={pathname == href ? "active" : "inactive"}
          animate={pathname == href ? "active" : "inactive"}
          transition={buttonTransition}
        >
          <LiaHandPointDownSolid />
        </motion.div>
      </motion.div>
      {/* <motion.div className="-z-2 absolute -bottom-1 left-1 h-full w-full rounded-full bg-mypink-300"></motion.div> */}
    </Link>
  );
}

export default HeaderLink;
