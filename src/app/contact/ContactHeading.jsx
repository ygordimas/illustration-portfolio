import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";

function ContactHeading() {
  return (
    <>
      <div className="relative h-fit w-fit p-4">
        <h2 className="relative font-singo text-6xl text-myblue-950">
          Get In Touch
        </h2>
        <div className="absolute right-0 top-0 h-10 w-10 translate-x-[140%] translate-y-[50%]">
          <div className="relative z-auto h-full w-full">
            <TfiCommentsSmiley className="absolute z-10 h-full w-full text-myblue-800" />

            {/* <div className="z-2 absolute -right-[3px] top-0 h-full w-full scale-[2.2]">
              <svg fill="#F5BB13" viewBox="0 0 510.68 510.68">
                <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
              </svg>
            </div> */}
            <div className="absolute right-[-2px] top-0 h-full w-full scale-[1.8] rounded-full bg-myyellow-500 p-2"></div>
          </div>
        </div>
        <div className="absolute -left-4 right-[-2.5rem] top-0 -z-10 h-[200%] rounded-r-full  rounded-bl-full bg-mypink-500"></div>
      </div>
    </>
  );
}

export default ContactHeading;
