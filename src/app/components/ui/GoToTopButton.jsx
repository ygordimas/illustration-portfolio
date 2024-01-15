import React from "react";
import { motion } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

function GoToTopButton() {
  const { scrollingProgress, setScrollToTop } = useScrollingContext();

  const goToTopButtonVariant = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleScroll = () => {
    setScrollToTop(true);
  };
  return (
    <motion.button
      onClick={() => handleScroll()}
      variants={goToTopButtonVariant}
      initial="hide"
      exit="hide"
      animate={scrollingProgress > 0.1 ? "show" : "hide"}
      className="pointer-events-auto rounded-full border-4 border-myblue-950 bg-mygreen-500 p-4 font-singoRound text-myblue-950"
      onClick={() => handleScroll()}
    >
      Scroll To Top
    </motion.button>
  );
}

export default GoToTopButton;
