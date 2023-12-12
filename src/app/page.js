"use client";

import Image from "next/image";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillCloseCircle,
} from "react-icons/ai";
import { illustrations } from "./utils/illustrations";
import Gallery from "./components/Gallery";
import Link from "next/link";
import MyTabs from "./components/MyTabs";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const isOpen = currentImage != null;

  function handleClickOpenImage(index) {
    console.log("clicked");
    setCurrentImage(illustrations[index]);
  }

  function handleCloseLightbox() {
    setCurrentImage(null);
  }

  function handleNavigation(direction) {
    let index = direction == "forward" ? currentIndex + 1 : currentIndex - 1;

    if (index < 0) {
      index = illustrations.length - 1;
    }

    if (index >= illustrations.length) {
      index = 0;
    }

    setCurrentIndex(index);
    setCurrentImage(illustrations[index]);
  }
  return (
    <>
      <Gallery
        illustrations={illustrations}
        handleClickOpenImage={handleClickOpenImage}
      />

      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-30 flex items-center justify-center bg-black bg-opacity-50">
          <button
            className="absolute top-5 right-5 text-5xl"
            onClick={handleCloseLightbox}
          >
            <AiFillCloseCircle />
          </button>
          <button className="text-5xl" onClick={() => handleNavigation("back")}>
            <AiOutlineArrowLeft />
          </button>
          {currentImage && (
            <div className="w-[90vw] h-[90vh] relative">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}

          <button
            className="text-5xl"
            onClick={() => handleNavigation("forward")}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      )}
    </>
  );
}
