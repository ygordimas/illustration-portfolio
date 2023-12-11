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
        {/* {illustrations.map((illustration, index) => (
          <ImageContainer
            image={illustration}
            onClick={() => handleClickOpenImage(index)}
          />
        ))} */}
        {/* <img src="/ALBIN/loveinslowmotion.png" alt="alt" />
        <img src="/ALBIN/likeacannonball.png" alt="alt" />
        <img src="/APWOT/apwot_0.png" alt="alt" />
        <img src="/APWOT/apwot_1.png" alt="alt" />
        <img src="/APWOT/apwot_2.png" alt="alt" />
        <img src="/APWOT/apwot_3.png" alt="alt" />
        <img src="/APWOT/apwot_4.png" alt="alt" />
        <img src="/BREAKFAST/breakfast.png" alt="alt" /> */}
        {items}
      </Masonry>
    </div>
  );
}
