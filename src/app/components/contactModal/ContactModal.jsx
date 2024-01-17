import React, { useState } from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import ContactFormModal from "./ContactFormModal";
import CloseModalButton from "./CloseModalButton";
import StripesSVG from "../layout/StripesSVG";
function ContactModal() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col justify-center gap-2 bg-mygreen-500 p-2">
      <ContactFormModal />
      <div
        className="absolute right-0 top-0 -z-50 h-full w-1/2"
        style={{
          mask: "linear-gradient(275deg, rgba(193,220,64,1) 0%, rgba(255,255,255,0) 75%, rgba(245,249,224,0) 100%)",
        }}
      >
        <StripesSVG color="bg-myblue-100" />
      </div>
    </div>
  );
}

export default ContactModal;