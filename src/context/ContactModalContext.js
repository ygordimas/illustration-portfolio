"use client";

import { useContext, createContext, useState } from "react";

const ContactModalContext = createContext({});

export const ContactModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState();

  return (
    <ContactModalContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModalContext = () => useContext(ContactModalContext);
