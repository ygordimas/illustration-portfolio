"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  currentIndex: null,
  setCurrentIndex: () => null,
  currentImage: null,
  setCurrentImage: () => null,
  scrollToTop: false,
  setScrollToTop: () => Boolean,
  isOpen: false,
  setIsOpe: () => Boolean,
});

export const GlobalContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        currentImage,
        setCurrentImage,
        scrollToTop,
        setScrollToTop,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
