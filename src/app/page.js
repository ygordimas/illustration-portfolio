"use client";

import React from "react";
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
    </>
  );
}
