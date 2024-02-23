import React from "react";
import Image from "next/image";
import { RiSearchEyeLine } from "react-icons/ri";
import { useViewModalContext } from "../../context/ViewModalContext";

function OverviewMainImage({ currentItem }) {
  const { setViewModal } = useViewModalContext();

  return (
    <div className="relative flex flex-col justify-center ">
      <Image
        src={currentItem.src}
        alt={currentItem.alt}
        width={currentItem.width}
        height={currentItem.height}
        className=""
        onClick={() => setViewModal(true)}
      />
      {/* <div className="absolute bottom-0 right-1 flex translate-y-1/2 gap-2  rounded-full  font-singoRound text-base tracking-wide text-myblue-800">
        <div className="rounded-full bg-mygreen-500 p-1 text-base text-myblue-800">
          <RiSearchEyeLine />
        </div>
        <p className="rounded-full bg-mygreen-500 px-2">Click to Expand</p>
      </div> */}
    </div>
  );
}

export default OverviewMainImage;
