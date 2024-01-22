import React from "react";
import { motion } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";

function GoToTopButton({ styles }) {
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
    <>
      {scrollingProgress > 0.1 && (
        <motion.button
          layout
          onClick={() => handleScroll()}
          variants={goToTopButtonVariant}
          initial="hide"
          exit="hide"
          animate={scrollingProgress > 0.1 ? "show" : "hide"}
          className={styles}
          onClick={() => handleScroll()}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.1,
              ease: [0.5, 0, 0.75, 0],
            },
          }}
        >
          Scroll To Top
        </motion.button>
      )}
    </>
  );
}

export default GoToTopButton;
