"use client";

import React from "react";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

function RoundButton({ direction, cta, height = "100", children }) {
  const className =
    "flex items-center bg-accent-500 text-white text-3xl p-2 font-display";

  return (
    <div className={`flex items-center flex-${direction} relative`}>
      {/* <div
        className={`flex items-center bg-green-400`}
        style={{ width: `${1.618 * height}px`, height: `${height}px` }}
      >
        {cta}
      </div> */}
      {direction == "row" ? (
        <>
          <div
            className={className}
            style={{
              minWidth: `${1.618 * height}px`,
              width: "fit-content",
              height: `${height}px`,
              marginRight: `${height / 2}px`,
              paddingRight: `${height / 2 + 5}px`,
            }}
          >
            {cta}
          </div>
          <div
            className={
              "absolute right-0 top-0 flex items-center justify-center rounded-full bg-primary-400"
            }
            style={{ width: `${height}px`, height: `${height}px` }}
          >
            {children}
          </div>
        </>
      ) : (
        <>
          <div
            className={className}
            style={{
              minWidth: `${1.618 * height}px`,
              width: "fit-content",
              height: `${height}px`,
              marginLeft: `${height / 2}px`,
              paddingLeft: `${height / 2 + 5}px`,
            }}
          >
            {cta}
          </div>
          <div
            className={
              "absolute top-0 flex items-center justify-center rounded-full bg-primary-400"
            }
            style={{ width: `${height}px`, height: `${height}px` }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default RoundButton;
