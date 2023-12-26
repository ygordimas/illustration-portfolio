"use client";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillCloseCircle,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Tags from "../components/Tags";
import { useGlobalContext } from "../context/store";
import { illustrations } from "../utils/illustrations";
import { useEffect, useRef, useState } from "react";

export default function ProjectBreakdown({ project }) {
  const { currentIndex, setCurrentIndex, setCurrentImage, setScrollToTop } =
    useGlobalContext();

  const projectIndex = illustrations.findIndex(
    (projects) => projects.path === project.path
  );

  useEffect(() => {
    setCurrentIndex(projectIndex);
  }, []);

  const uppercasedTitle = (path) => {
    const words = path.split("-");

    const title = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    return title;
  };

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

  const managePreviousIndex = (currentIndex) => {
    if (currentIndex == 0) {
      return illustrations.length - 1;
    } else {
      return currentIndex - 1;
    }
  };

  const manageNextIndex = (currentIndex) => {
    if (currentIndex >= illustrations.length) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  };

  const extraImages = () => {
    return project.wips?.map((wip, index) => (
      <Image key={index} src={wip} width={1024} height={1024} />
    ));
  };

  return (
    <main className="px-4 flex flex-col gap-2 items-center text-accent-900">
      <section className="flex flex-col-reverse items-center w-[100%]">
        <div>
          <h2 className="text-2xl text-secondary-500">
            {uppercasedTitle(project.path)}
          </h2>
        </div>
        <nav className="w-[100%] flex justify-between gap-2 text-4xl ">
          <Link
            href={`/projects/${
              illustrations[managePreviousIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("backwards")}
          >
            <AiOutlineArrowLeft />
          </Link>

          <Link
            href={`/projects/${
              illustrations[manageNextIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("forward")}
          >
            <AiOutlineArrowRight />
          </Link>
        </nav>
      </section>

      <div className="self-start flex flex-col gap-2">
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tag, index) => (
            <Tags tag={tag} id={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center ">
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className=""
        />

        {project.wips && (
          <div className="max-w-[1024px] grid grid-cols-2 gap-2">
            {extraImages()}
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse justify-between items-center w-[100%]">
        <button
          title="Go To Top"
          onClick={() => {
            setScrollToTop(true);
          }}
          className="py-2 px-4 text-primary-50 text-2xl font-semibold bg-secondary-400 font-lora rounded-3xl tracking-wide"
        >
          Go To Top
        </button>
        <nav className="w-[100%] flex justify-between gap-2 text-4xl">
          <Link
            href={`/projects/${
              illustrations[managePreviousIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("backwards")}
          >
            <AiOutlineArrowLeft />
          </Link>

          <Link
            href={`/projects/${
              illustrations[manageNextIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("forward")}
          >
            <AiOutlineArrowRight />
          </Link>
        </nav>
      </div>
    </main>
  );
}
