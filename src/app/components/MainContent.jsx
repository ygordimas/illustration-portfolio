"use client";

import { useGlobalContext } from "../context/store";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import ContactButton from "./ContactButton";

export default function MainContent({ children }) {
  const { scrollToTop, setScrollToTop } = useGlobalContext();
  const scrollArea = useRef();

  useEffect(() => {
    if (scrollToTop) {
      scrollArea.current.scrollTop = 0;
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  return (
    <main className="relative flex grow flex-col items-center" ref={scrollArea}>
      <div className="grow">{children}</div>

      {/* <Footer /> */}
    </main>
  );
}
