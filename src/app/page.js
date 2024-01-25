"use client";

import { illustrations } from "./data/illustrations";
import ImageGallery from "./components/gallery/ImageGallery";
import { useGlobalContext } from "./context/store";

export default function Home() {
  const { setCurrentImage, setCurrentIndex } = useGlobalContext();

  function handleClickOpenImage(index) {
    setCurrentIndex(index);
    setCurrentImage(illustrations[index]);
  }

  return (
    <>
      <ImageGallery
        list={illustrations}
        handleClickOpenImage={handleClickOpenImage}
      />
    </>
  );
}
