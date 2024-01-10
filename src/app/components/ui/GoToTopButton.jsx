import React from "react";
import { motion } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

function GoToTopButton() {
  const { setScrollToTop } = useScrollingContext();

  const handleScroll = () => {
    console.log("clicked");
    setScrollToTop(true);
  };
  return (
    <motion.button
      onClick={() => handleScroll()}
      className="rounded-full border-4 border-myblue-950 bg-mygreen-500 p-4 font-singoRound text-4xl text-myblue-950"
    >
      Scroll To Top
    </motion.button>
  );
}

export default GoToTopButton;
