"use client";

import React from "react";

export default function Stripes({ color }) {
  return (
    <div
      className={`h-full w-full ${color} bg-repeat`}
      style={{ mask: "url('/SVG/lines2.svg')", maskSize: "12px" }}
    />
  );
}
