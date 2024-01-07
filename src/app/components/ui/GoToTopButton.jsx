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
      className="rounded-3xl bg-accent-500 p-8 font-mainfont font-normal text-primary-50"
    >
      Scroll To Top
    </motion.button>
  );
}

export default GoToTopButton;
