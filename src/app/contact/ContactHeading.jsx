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

            <div className="absolute right-[-2px] top-0 h-full w-full scale-[1.8] rounded-full bg-myyellow-500 p-2"></div>
          </div>
        </div>
        <div className="absolute -left-4 right-[-2.5rem] top-0 -z-10 h-[200%] rounded-r-full  rounded-bl-full bg-mypink-500"></div>
      </div>
    </>
  );
}

export default ContactHeading;
