import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import EightPoints from "../SVGs/EightPoints";
import { useContactModalContext } from "@/app/context/ContactModalContext";

function MobileNavContactCTA() {
  const { setOpenModal } = useContactModalContext();
  return (
    <div
      onClick={() => setOpenModal(true)}
      className="pointer-events-auto flex cursor-pointer items-center gap-2 rounded-full border-[2px] border-myblue-800 bg-myblue-100 px-8 "
    >
      <div className="border-myblue-800 font-singoRound">Contact</div>
    </div>
  );
}

export default MobileNavContactCTA;
