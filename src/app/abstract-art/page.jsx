"use client";

import React, { useEffect } from "react";
import ImageGallery from "../components/gallery/ImageGallery";
import { abstracts } from "../data/abstracts";
import { useGlobalContext } from "../context/store";

function AbstractsList() {
  const { listType, setListType } = useGlobalContext();

  useEffect(() => {
    setListType("abstracts");
  }, []);

  return (
    <>
      <ImageGallery list={abstracts} />
    </>
  );
}

export default AbstractsList;
