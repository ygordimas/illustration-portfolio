"use client";

import { useContext, createContext, useState } from "react";

const ScrollingContext = createContext({});

export const ScrollingContextProvider = ({ children }) => {
  const [scrollingProgress, setScrollingProgress] = useState(0);
  const [scrollToTop, setScrollToTop] = useState(false);

  return (
    <ScrollingContext.Provider
      value={{
        scrollingProgress,
        setScrollingProgress,
        scrollToTop,
        setScrollToTop,
      }}
    >
      {children}
    </ScrollingContext.Provider>
  );
};

export const useScrollingContext = () => useContext(ScrollingContext);
