"use client";

import React from "react";
import GalleryCard from "../components/GalleryCard";
import About from "../components/About";
import HomeContainer from "../components/HomeContainer";
import GalleryCardsContainer from "../components/GalleryCardsContainer";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <About />
        <GalleryCardsContainer />
      </HomeContainer>
      {/* <GalleryCard label="llustrations" href={"/gallery/illustrations"} />
      <GalleryCard label="Game Art" href={"/gallery/gameart"} />
      <GalleryCard label="Abstract Art" href={"/gallery/abstracts"} /> */}
    </>
  );
}
