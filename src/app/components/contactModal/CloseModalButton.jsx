import { useContactModalContext } from "@/app/context/ContactModalContext";
import React from "react";

function CloseModalButton() {
  const { setOpenModal } = useContactModalContext();
  return (
    <div
      className="w-fit rounded-full border-[4px] border-myblue-800 bg-myblue-100 p-4 font-singo text-4xl tracking-wide"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div></div>
      <span>Close</span>
    </div>
  );
}

export default CloseModalButton;
