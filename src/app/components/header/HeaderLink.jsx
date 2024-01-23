import { usePathname } from "next/navigation";
import { LiaHandPointUpSolid, LiaHandPointDownSolid } from "react-icons/lia";
import Link from "next/link";
import { motion } from "framer-motion";
import TextEffect from "../layout/TextEffect";
import ButtonBase from "../ui/ButtonBase";
import { useState } from "react";

function HeaderLink({ label, href }) {
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
    <Link
      href={href}
      className={`${
        pathname == href ? "pointer-events-none" : "pointer-events-auto"
      } relative h-fit w-fit`}
    >
      <motion.div
        className={`flex cursor-pointer items-center gap-2 rounded-full border-[4px] border-mypink-300 bg-myblue-100 px-8 py-2 font-singoRound text-2xl shadow-[2px_2px_0_0_rgb(248,145,158)]`}
        onHoverStart={() => handleHoverIn()}
        onHoverEnd={() => handleHoverOut()}
        variants={buttonVariants}
        animate={hovered && href !== pathname ? "animate" : "initial"}
        whileTap={{
          scale: 0.96,
        }}
      >
        <TextEffect
          variants={textShadowVariant}
          animate={hovered ? "animate" : "initial"}
          text={label}
        />
      </motion.div>
      {href == pathname && (
        <motion.div
          className="absolute bottom-0 right-0 rounded-full border-2 border-myblue-800 bg-myyellow-400 p-1 text-2xl"
          variants={littleHandVariant}
          initial="initial"
          animate={href == pathname ? "animate" : "initial"}
        >
          <LiaHandPointDownSolid />
        </motion.div>
      )}
    </Link>
  );
}

export default HeaderLink;
