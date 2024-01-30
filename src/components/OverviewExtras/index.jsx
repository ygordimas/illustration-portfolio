import React from "react";
import Image from "next/image";

function OverviewExtras({ currentItem }) {
  const extras = () => {
    return currentItem.wips?.map((wip, index) => (
      <Image key={index} src={wip} width={1024} height={1024} />
    ));
  };
  return (
    <>
      <div className="flex h-fit w-full items-center justify-center bg-mypink-300 py-2 font-mainfont text-4xl font-bold tracking-wide text-mygreen-500">
        <p>behind the scenes & extras</p>
      </div>

      <hr className="border-4 border-mypink-300" />

      <div className="grid max-w-5xl grid-cols-2 gap-4">{extras()}</div>
    </>
  );
}

export default OverviewExtras;
