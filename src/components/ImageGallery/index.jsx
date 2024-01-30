"use client";

import React from "react";
import ImageContainer from "../ImageContainer";
import Masonry from "react-masonry-css";
import { useScrollingContext } from "../../context/ScrollingContext";
import { useGlobalContext } from "../../context/GlobalContext";
import { illustrations } from "../../db/illustrations";
import { abstracts } from "../../db/abstracts";
import { gameart } from "../../db/gameart";
import Link from "next/link";

function ImageGallery({ params }) {
  const { setScrollToTop } = useScrollingContext();

  const breakpointColumnsObj = {
    default: 3,
    1536: 3,
    1280: 3,
    1024: 2,
    768: 1,
    640: 1,
  };

  function retrieveItems(path) {
    if (path == "illustrations") {
      return illustrations;
    } else if (path == "abstracts") {
      return abstracts;
    } else if (path == "gameart") {
      return gameart;
    }
  }

  const items = retrieveItems(params[0]);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-2"
      columnClassName=""
    >
      {items.map((image, index) => (
        <ImageContainer image={image} index={index} galleryPath={params[0]} />
      ))}
    </Masonry>
  );
}

export default ImageGallery;
