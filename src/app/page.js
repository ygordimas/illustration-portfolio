"use client";

import React from "react";
import GalleryCard from "../components/GalleryCard";

export default function Home() {
  return (
    <>
      <GalleryCard label="llustrations" />
      <GalleryCard label="Game Art" />
      <GalleryCard label="Abstract Art" />
    </>
  );
}
