import React from "react";

function StripesSVG({ color }) {
  return (
    <>
      <div
        className={`h-full w-full ${color} bg-repeat`}
        style={{ mask: "url('/SVG/lines2.svg')", maskSize: "12px" }}
      ></div>
    </>
  );
}

export default StripesSVG;
