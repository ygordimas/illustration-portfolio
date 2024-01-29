"use client";

import React from "react";
import ImageContainer from "../../components/ImageContainer";
import Masonry from "react-masonry-css";
import { useScrollingContext } from "../../context/ScrollingContext";
import { useGlobalContext } from "../../context/GlobalContext";

function ImageGallery({ listOfImages }) {
  const { setScrollToTop } = useScrollingContext();

  const breakpointColumnsObj = {
    default: 3,
    1536: 3,
    1280: 3,
    1024: 2,
    768: 1,
    640: 1,
  };

  const { setCurrentImage, setCurrentIndex } = useGlobalContext();

  const handleClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(listOfImages[index]);
    setScrollToTop(true);
  };

  const items = listOfImages.map((illustration, index) => (
    <ImageContainer image={illustration} onClick={() => handleClick(index)} />
  ));

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-2"
      columnClassName=""
    >
      {items}
    </Masonry>
  );
}

export default ImageGallery;
