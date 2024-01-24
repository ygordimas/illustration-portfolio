import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import ButtonBase from "../ui/ButtonBase";

function SendMessageButton({ isSubmitting }) {
  return (
    <>
      <button type="submit" className="flex items-center justify-center">
        <ButtonBase
          label={isSubmitting ? "Sending..." : "Send Message"}
          styles="py-2"
        />
      </button>
    </>
  );
}

export default SendMessageButton;
