"use client";

import Image from "next/image";
import ImageContainer from "./ImageContainer";
import Masonry from "react-masonry-css";

export default function ImageGallery({ illustrations, handleClickOpenImage }) {
  const breakpointColumnsObj = {
    default: 3,
    1536: 3,
    1280: 3,
    1024: 2,
    640: 1,
  };

  const items = illustrations.map((illustration, index) => (
    <ImageContainer
      image={illustration}
      onClick={() => handleClickOpenImage(index)}
    />
  ));

  return (
    <div className="mt-2">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-2"
        columnClassName=""
      >
        {items}
      </Masonry>
    </div>
  );
}
