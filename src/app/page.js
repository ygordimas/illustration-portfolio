"use client";

import React, { useEffect } from "react";

import { illustrations } from "../db/illustrations";
import ImageGallery from "../containers/ImageGallery";
import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { setListType } = useGlobalContext();
  useEffect(() => {
    setListType("illustrations");
  }, []);

  return (
    <>
      <ImageGallery listOfImages={illustrations} />
    </>
  );
}
