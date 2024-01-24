import { useContactModalContext } from "@/app/context/ContactModalContext";
import React from "react";
import ButtonBase from "../ui/ButtonBase";

function CloseModalButton() {
  const { setOpenModal } = useContactModalContext();
  return (
    <>
      <ButtonBase
        label="Close"
        onClick={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}

export default CloseModalButton;
