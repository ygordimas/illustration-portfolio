import React from "react";
import { motion } from "framer-motion";

function TextEffect({
  text,
  size = "",
  padding = "",
  font = "font-singoRound",
  ...rest
}) {
  return (
    <motion.p
      className={`relative block h-fit w-fit ${size} mr-0 text-myblue-800 ${padding} ${font}`}
      {...rest}
    >
      {text}
    </motion.p>
  );
}

export default TextEffect;
