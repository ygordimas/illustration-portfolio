"use client";

import { illustrations } from "./utils/illustrations";
import ImageGallery from "./components/ImageGallery";
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
        illustrations={illustrations}
        handleClickOpenImage={handleClickOpenImage}
      />
    </>
  );
}
