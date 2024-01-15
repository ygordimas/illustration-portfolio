import React from "react";
import SocialMedia from "../ui/SocialMedia";
import StripesSVG from "../layout/StripesSVG";

function Footer() {
  return (
    <div
      className="relative mb-2 box-border h-fit w-full overflow-hidden rounded-full border-4 border-myblue-800 bg-mygreen-500 max-lg:w-[50vw]"
      style={{
        boxShadow:
          "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
      }}
    >
      <SocialMedia />

      <div
        className="absolute bottom-0 left-0 h-1/3 w-full overflow-hidden"
        style={{
          mask: "linear-gradient(0deg, rgba(255,255,255,0) 45%, rgba(193,220,64,1) 100%)",
        }}
      >
        <StripesSVG />
      </div>
    </div>
  );
}

export default Footer;
