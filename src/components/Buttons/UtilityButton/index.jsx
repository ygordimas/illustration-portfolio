import React from "react";
import { motion } from "framer-motion";

export default function UtilityButton({
  label,
  styles = "",
  children,
  ...rest
}) {
  return (
    <motion.div
      className={`pointer-events-auto relative flex cursor-pointer items-center gap-2 rounded-full border-[4px] border-mypink-300 bg-myblue-100 px-8 font-singoRound shadow-[2px_2px_0_0_rgb(248,145,158)] ${styles}`}
      whileHover={{
        scale: 1.05,
        textShadow: "2px 2px 0 rgb(214, 231, 125)",
        transition: {
          duration: 0.1,
          ease: [0.5, 0, 0.75, 0],
        },
      }}
      {...rest}
    >
      <p>{label}</p>
      {children}
    </motion.div>
  );
}
