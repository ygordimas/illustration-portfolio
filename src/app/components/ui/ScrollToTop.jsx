import React from "react";
import ButtonBase from "./ButtonBase";
import { useScrollingContext } from "../../context/ScrollingContext";

function ScrollToTop() {
  const { setScrollToTop } = useScrollingContext();
  return (
    <>
      <ButtonBase
        key="scrollUp"
        label="Scroll To Top"
        onClick={() => setScrollToTop(true)}
      >
        <div className="absolute right-0 top-0 bg-yellow-400 text-lg"></div>
      </ButtonBase>
    </>
  );
}

export default ScrollToTop;
