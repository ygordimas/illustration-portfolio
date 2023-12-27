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
    (projects) => projects.path === project.path,
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
    <main className="flex flex-col items-center gap-2 px-4 text-accent-900">
      <section className="flex w-[100%] flex-col-reverse items-center">
        <div>
          <h2 className="text-secondary-500 text-2xl">
            {uppercasedTitle(project.path)}
          </h2>
        </div>
        <nav className="flex w-[100%] justify-between gap-2 text-4xl ">
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

      <div className="flex flex-col gap-2 self-start">
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tag, index) => (
            <Tags tag={tag} id={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 ">
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className=""
        />

        {project.wips && (
          <div className="grid max-w-[1024px] grid-cols-2 gap-2">
            {extraImages()}
          </div>
        )}
      </div>

      <div className="flex w-[100%] flex-col-reverse items-center justify-between">
        <button
          title="Go To Top"
          onClick={() => {
            setScrollToTop(true);
          }}
          className="bg-secondary-400 font-lora rounded-3xl px-4 py-2 text-2xl font-semibold tracking-wide text-primary-50"
        >
          Go To Top
        </button>
        <nav className="flex w-[100%] justify-between gap-2 text-4xl">
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
