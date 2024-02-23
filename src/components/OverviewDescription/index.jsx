import React from "react";
import OverviewTag from "../OverviewTag";

function OverviewDescription({ currentItem }) {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-8 px-2">
      <p className="font-mainfont text-base font-normal tracking-tight text-myblue-800">
        {currentItem.description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {currentItem.tools.map((tag, index) => (
          <OverviewTag key={index} tag={tag} id={index} />
        ))}
      </div>
    </div>
  );
}

export default OverviewDescription;
