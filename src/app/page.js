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
      <div className="flex flex-col px-10 bg-amber-300">
        <Head>
          <title>Ygor Dimas Portfolio</title>
          <meta
            name="description"
            content="3D artist and illustrator working with stylized art and asset creation."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="flex justify-between items-center bg-purple-300 p-8">
          <div>
            <h1>YGOR DIMAS</h1>
            <h2>ILLUSTRATION & 3D ART PORTFOLIO</h2>
          </div>

          <Link
            href="#"
            className="rounded-3xl bg-white text-stone-900 px-3 py-2 hover:bg-opacity-90"
          >
            Get In Touch
          </Link>
        </header>

        <main className="grow bg-violet-200">
          {/* <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-purple-600 font-medium">
            Ygor Dimas
          </h2>
          <h3 className="text-2xl py-2">Illustrator & 3D Artist</h3>
          <p className="text-md py-5 leading-8">
            I'm a freelancer artist currently working with Blender, Substance
            Designer and Substance Painter to create stylized illustrations and
            3D assets and environments for video games.
          </p>
        </div> */}
          <Gallery
            illustrations={illustrations}
            handleClickOpenImage={handleClickOpenImage}
          />
        </main>

        <footer className="h-[60px] bg-purple-300 text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </footer>
      </div>

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
