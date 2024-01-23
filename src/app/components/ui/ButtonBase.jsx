import React from "react";
import TextEffect from "../layout/TextEffect";
import { motion } from "framer-motion";

function ButtonBase({ label, styles = "", onClick }) {
  return (
    <motion.div
      className={`pointer-events-auto flex cursor-pointer items-center gap-2 rounded-full border-[4px] border-mypink-300 bg-myblue-100 px-8 font-singoRound text-2xl shadow-[2px_2px_0_0_rgb(248,145,158)] ${styles}`}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1,
          ease: [0.5, 0, 0.75, 0],
        },
      }}
      onClick={onClick}
    >
      <TextEffect text={label} fill="rgb(214, 231, 125)" />
    </motion.div>
  );
}

export default ButtonBase;
