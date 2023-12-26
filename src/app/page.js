"use client";

import { illustrations } from "./utils/illustrations";
import Gallery from "./components/Gallery";
import { useGlobalContext } from "./context/store";

export default function Home() {
  const { setCurrentImage, setCurrentIndex } = useGlobalContext();

  function handleClickOpenImage(index) {
    setCurrentIndex(index);
    setCurrentImage(illustrations[index]);
  }

  return (
    <>
      <Gallery
        illustrations={illustrations}
        handleClickOpenImage={handleClickOpenImage}
      />
    </>
  );
}
