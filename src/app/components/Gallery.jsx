"use client";

import Image from "next/image";
import ImageContainer from "./ImageContainer";
import Masonry from "react-masonry-css";

export default function Gallery({ illustrations, handleClickOpenImage }) {
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {illustrations.map((illustration, index) => (
        <ImageContainer
          image={illustration}
          onClick={() => handleClickOpenImage(index)}
        />
      ))}
    </section>
  );
}
