"use client";

import { illustrations } from "./data/illustrations";
import ImageGallery from "./components/gallery/ImageGallery";
import { useGlobalContext } from "./context/store";
import { useEffect } from "react";

export default function Home() {
  const { setListType } = useGlobalContext();
  useEffect(() => {
    setListType("illustrations");
  }, []);

  return (
    <>
      <ImageGallery list={illustrations} />
    </>
  );
}
