import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";

function SendMessageButton() {
  return (
    <button
      className="relative w-fit self-end rounded-full border-2 border-myblue-950 bg-myblue-100 p-4 font-singoRound text-4xl"
      type="submit"
    >
      Send Message
    </button>
  );
}

export default SendMessageButton;
