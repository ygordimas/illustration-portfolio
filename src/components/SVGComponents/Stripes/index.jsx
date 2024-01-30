"use client";

import React from "react";

function Stripes({ color }) {
  return (
    <div
      className={`flex h-full w-full ${color} bg-repeat`}
      style={{ mask: "url('/SVG/lines2.svg')", maskSize: "12px" }}
    />
  );
}

export default Stripes;
