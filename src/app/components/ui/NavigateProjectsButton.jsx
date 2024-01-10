import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa6";
import { LiaHandPointLeft, LiaHandPointRight } from "react-icons/lia";

function NavigateProjectsButton({
  path,
  handleNavigation,
  children,
  direction,
}) {
  return (
    // <Link
    //   href={`/projects/${path}`}
    //   onClick={() => handleNavigation()}
    //   className="relative rounded-full border-4 border-myblue-950 bg-myblue-500 p-2 text-4xl text-myyellow-500"
    // >
    //   {direction == "left" ? <FaRegHandPointLeft /> : <FaRegHandPointRight />}
    //   <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-myblue-950 bg-myyellow-500 px-2 py-0.5">
    //     <p className="font-singoRound text-lg tracking-wide text-myblue-950">
    //       {direction == "left" ? "Previous" : "Next"}
    //     </p>
    //   </span>
    // </Link>
    <Link
      href={`/projects/${path}`}
      onClick={() => handleNavigation()}
      className="flex text-4xl"
    >
      {/* {direction == "left" ? <FaRegHandPointLeft /> : <FaRegHandPointRight />}
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-myblue-950 bg-myyellow-500 px-2 py-0.5">
        <p className="font-singoRound text-lg tracking-wide text-myblue-950">
          {direction == "left" ? "Previous" : "Next"}
        </p>
      </span> */}
      <div
        className={`flex ${
          direction == "left" ? `flex-row` : `flex-row-reverse`
        } items-center p-2 font-singoRound`}
      >
        <div
          className={`${
            direction == "left" ? `rounded-l-full` : `rounded-r-full`
          } border-4 ${
            direction == "left" ? `border-r-0` : `border-l-0`
          } border-myblue-950 bg-myblue-500 p-1 text-myyellow-500`}
        >
          {direction == "left" ? <LiaHandPointLeft /> : <LiaHandPointRight />}
        </div>
        <span
          className={`relative box-border h-20 w-10 overflow-hidden ${
            direction == "left" ? `border-l-4` : `border-r-4`
          } border-myblue-950`}
        >
          <svg
            className={`absolute top-1/2 h-20 w-20 ${
              direction == "left" ? `-translate-x-1/2` : `-translate-x-[4px]`
            } -translate-y-1/2 fill-myyellow-500`}
            viewBox="0 0 510.68 510.68"
          >
            <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default NavigateProjectsButton;
