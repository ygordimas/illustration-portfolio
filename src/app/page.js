"use client";

import React from "react";

import { illustrations } from "../db/illustrations";
import ImageGallery from "../containers/ImageGallery/index";
import { useGlobalContext } from "./context/store";
import { useEffect } from "react";

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
