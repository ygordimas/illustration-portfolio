"use client";

import Image from "next/image";
import ImageContainer from "./ImageContainer";
import Masonry from "react-masonry-css";

export default function Gallery({ illustrations, handleClickOpenImage }) {
  const items = illustrations.map((illustration, index) => (
    <ImageContainer
      image={illustration}
      onClick={() => handleClickOpenImage(index)}
    />
  ));

  return (
    <div className="p-2">
      <Masonry breakpointCols={3} className="flex gap-2" columnClassName="">
        {items}
      </Masonry>
    </div>
  );
}
