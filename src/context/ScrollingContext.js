"use client";

import { useContext, createContext, useState } from "react";

const ScrollingContext = createContext({});

export const ScrollingContextProvider = ({ children }) => {
  const [scrollingProgress, setScrollingProgress] = useState(0);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <ScrollingContext.Provider
      value={{
        scrollingProgress,
        setScrollingProgress,
        scrollToTop,
        setScrollToTop,
        isScrolling,
        setIsScrolling,
      }}
    >
      {children}
    </ScrollingContext.Provider>
  );
};

export const useScrollingContext = () => useContext(ScrollingContext);
