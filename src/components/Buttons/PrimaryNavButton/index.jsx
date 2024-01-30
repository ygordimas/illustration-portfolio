import React from "react";
import { usePathname } from "next/navigation";
import { LiaHandPointDownSolid } from "react-icons/lia";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function PrimaryNavButton({ label, href, children }) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.03,
    },
    exit: {
      scale: 1,
    },
  };

  const buttonTransition = {
    transition: {
      duration: 0.1,
      ease: [0.5, 0, 0.75, 0],
    },
  };

  const textShadowVariant = {
    initial: {
      textShadow: `${
        pathname == href
          ? "2px 2px 0 rgb(247, 198, 58)"
          : "2px 2px 0 rgb(132, 216, 252)"
      }`,
    },
    animate: {
      textShadow: "2px 2px 0 rgb(214, 231, 125)",
    },
  };

  const littleHandVariant = {
    initial: {
      opacity: 0,
      x: "-200%",
      y: "50%",
      rotate: "135deg",
    },
    animate: {
      opacity: 1,
      x: "0%",
      y: "50%",
      rotate: "135deg",
    },
  };

  const linkStyle =
    "relative border-2 rounded-full border-myblue-800 max-xl:[--borderOpacity:rgba(3,67,95,1)] [--borderOpacity:rgba(2,39,55,0)] px-4 py-1 font-singoRound text-xl lg:text-2xl xl:text-3xl tracking-wide text-myblue-800 z-10 shadow-[2px_2px_0_0_rgb(250,183,192)]";

  return (
    // <Link
    //   href={href}
    //   className={`${
    //     pathname == href ? "pointer-events-none" : "pointer-events-auto"
    //   } relative h-fit w-fit`}
    // >
    <motion.div
      className={`relative flex cursor-pointer items-center gap-2 rounded-xl border-[4px] border-mypink-300 bg-myblue-100 px-2 py-2 font-singoRound text-xl tracking-wide shadow-[2px_2px_0_0_rgb(248,145,158)] xl:text-xl`}
      onHoverStart={() => handleHoverIn()}
      onHoverEnd={() => handleHoverOut()}
      variants={buttonVariants}
      animate={hovered && href !== pathname ? "animate" : "initial"}
      whileTap={{
        scale: 0.96,
      }}
    >
      <motion.p
        variants={textShadowVariant}
        animate={hovered ? "animate" : "initial"}
      >
        {label}
      </motion.p>
      {children}
    </motion.div>

    // </Link>
  );
}

export default PrimaryNavButton;
