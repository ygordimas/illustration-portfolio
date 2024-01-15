import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";

function MobileNavContactCTA() {
  return (
    <div className="flex items-center gap-2 rounded-full border-[2px] border-myblue-800 bg-myblue-100 px-8">
      <div className="border-myblue-800 font-singoRound">Talk To Me</div>
      <div className="rounded-full bg-myyellow-500 p-4">
        <TfiCommentsSmiley className="" />
      </div>
    </div>
  );
}

export default MobileNavContactCTA;
