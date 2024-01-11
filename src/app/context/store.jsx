"use client";

import { createContext, useContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        currentImage,
        setCurrentImage,

        isOpen,
        setIsOpen,
        hideHeader,
        setHideHeader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
