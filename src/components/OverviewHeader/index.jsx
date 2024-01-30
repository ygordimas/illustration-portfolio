import React from "react";
import NavigateProjectsButton from "../Buttons/NavigateProjectsButton";

function OverviewHeader({ currentItem, previousItem, nextItem }) {
  return (
    <nav className="flex w-full max-w-5xl items-center justify-between gap-2 text-4xl">
      <NavigateProjectsButton path={previousItem} direction="left" />
      <h2
        style={{
          textShadow: "0px 2px 0 rgb(215, 233, 133)",
        }}
        className="flex h-fit justify-center  bg-myyellow-500 p-6 font-mainfont text-2xl font-bold tracking-tight text-myblue-800"
      >
        {currentItem.type}
      </h2>

      <NavigateProjectsButton path={nextItem} direction="right" />
    </nav>
  );
}

export default OverviewHeader;
