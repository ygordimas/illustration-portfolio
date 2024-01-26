"use client";

import React, { useEffect } from "react";
import { gameart } from "../data/gameart";
import { useGlobalContext } from "../context/store";
import ImageGallery from "../components/gallery/ImageGallery";

function GameArt() {
  const { listType, setListType } = useGlobalContext();

  useEffect(() => {
    setListType("gameart");
  }, []);

  return (
    <>
      <ImageGallery list={gameart} />
    </>
  );
}

export default GameArt;
