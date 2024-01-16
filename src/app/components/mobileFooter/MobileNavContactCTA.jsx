import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import EightPoints from "../SVGs/EightPoints";
import { useContactModalContext } from "@/app/context/ContactModalContext";

function MobileNavContactCTA() {
  const { setOpenModal } = useContactModalContext();
  return (
    <div
      onClick={() => setOpenModal(true)}
      className="pointer-events-auto flex items-center gap-2 rounded-full border-[2px] border-myblue-800 bg-myblue-100 px-8 "
    >
      <div className="border-myblue-800 font-singoRound">Contact</div>
      {/* <div className="relative overflow-visible  rounded-full">
        <EightPoints
          className="absolute left-0 top-0 "
          size={"h-16 w-16"}
          fill={"fill-myyellow-500"}
        />
        <TfiCommentsSmiley className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full" />
      </div> */}
    </div>
  );
}

export default MobileNavContactCTA;
