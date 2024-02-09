import React from "react";
import GalleryCard from "../GalleryCard";

const GalleryCardsContainer = () => {
  return (
    <div className="flex justify-between">
      <GalleryCard
        href={"/gallery/illustrations"}
        imageURL="/ICONS/gallery-icon-illustrations.png"
        label="Illustrations"
      />
      <GalleryCard
        href={"/gallery/gameart"}
        imageURL="/ICONS/gallery-icon-gameart.png"
        label="Game Art"
      />
      <GalleryCard
        href={"/gallery/abstracts"}
        imageURL="/ICONS/gallery-icon-abstracts.png"
        label="Abstract Art"
      />
    </div>
  );
};

export default GalleryCardsContainer;
