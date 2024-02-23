"use client";

import { useContext, createContext, useState } from "react";

const ViewModalContext = createContext({});

export const ViewModalContextProvider = ({ children }) => {
  const [viewModal, setViewModal] = useState();

  return (
    <ViewModalContext.Provider
      value={{
        viewModal,
        setViewModal,
      }}
    >
      {children}
    </ViewModalContext.Provider>
  );
};

export const useViewModalContext = () => useContext(ViewModalContext);
