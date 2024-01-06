import React from "react";
import { motion } from "framer-motion";

function GoToTopButton() {
  return (
    <motion.button className="bg-accent-500 p-8 font-mainfont font-normal">
      Scroll To Top
    </motion.button>
  );
}

export default GoToTopButton;
