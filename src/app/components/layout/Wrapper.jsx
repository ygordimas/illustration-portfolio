"use client";

import React, { useRef } from "react";
import { useGlobalContext } from "../../context/store";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Wrapper({ children }) {
  const wrapperRef = useRef(null);
  const { scrollY } = useScroll({
    container: wrapperRef,
  });

  const { hideHeader, setHideHeader } = useGlobalContext();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  });

  return (
    <div
      ref={wrapperRef}
      className="align-center relative flex h-full w-full flex-col overflow-y-scroll  px-2"
    >
      {children}
    </div>
  );
}

export default Wrapper;
