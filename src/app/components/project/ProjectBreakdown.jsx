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
import Tags from "../../components/ui/Tags";
import { useGlobalContext } from "../../context/store";
import { illustrations } from "../../data/illustrations";
import { useEffect, useRef, useState } from "react";
import getUppercaseTitle from "../../utils/getUppercaseTitle";
import { motion, useInView, useAnimate } from "framer-motion";
import {
  useScrollingContext,
  ScrollingContextProvider,
} from "../../context/ScrollingContext";
import GoToTopButton from "../../components/ui/GoToTopButton";
import NavigateProjectsButton from "../../components/ui/NavigateProjectsButton";

export default function ProjectBreakdown({ project }) {
  const footerNavigationRef = useRef(null);
  const buttonRef = useRef(null);
  const wrapperRef = useRef(null);

  const { currentIndex, setCurrentIndex, setCurrentImage } = useGlobalContext();

  const {
    scrollToTop,
    setScrollToTop,
    scrollingProgress,
    setScrollingProgress,
  } = useScrollingContext();

  const projectIndex = illustrations.findIndex(
    (projects) => projects.path === project.path,
  );

  useEffect(() => {
    setCurrentIndex(projectIndex);
  }, []);

  function handleNavigation(direction) {
    let index = direction == "next" ? currentIndex + 1 : currentIndex - 1;

    if (index < 0) {
      index = illustrations.length - 1;
    }

    if (index >= illustrations.length - 1) {
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
    if (currentIndex >= illustrations.length - 1) {
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

  const arrowStyles = "bg-primary-50 rounded-full p-2 mx-1 text-primary-600";

  const goToTopButtonVariant = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main
      ref={wrapperRef}
      className="relative flex flex-col items-center gap-2 text-accent-900"
    >
      <motion.div
        ref={buttonRef}
        variants={goToTopButtonVariant}
        initial="hide"
        animate={scrollingProgress > 0.1 ? "show" : "hide"}
        className="fixed left-0 top-[90vh] z-10 flex w-full justify-center bg-red-400 opacity-0"
      >
        <GoToTopButton onClick={() => setScrollToTop(true)} />
      </motion.div>

      <nav className="sticky flex w-[100%] items-center justify-between bg-primary-600 py-4 text-4xl">
        <Link
          href={`/projects/${
            illustrations[managePreviousIndex(currentIndex)]?.path
          }`}
          onClick={() => handleNavigation("previous")}
          className={arrowStyles}
        >
          <AiOutlineArrowLeft />
        </Link>
        <h2 className="font-medium text-primary-50">{project.type}</h2>

        {/* <Link
          href={`/projects/${
            illustrations[manageNextIndex(currentIndex)]?.path
          }`}
          onClick={() => handleNavigation("next")}
          className={arrowStyles}
        >
          <AiOutlineArrowRight />
        </Link> */}
        <NavigateProjectsButton
          path={illustrations[manageNextIndex(currentIndex)]?.path}
          handleNavigation={() => handleNavigation("next")}
        >
          <AiOutlineArrowRight />
        </NavigateProjectsButton>
      </nav>

      <div className="flex flex-col gap-2 self-start px-2 text-2xl">
        <p className="font-normal text-primary-700">{project.description}</p>
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

      <div
        ref={footerNavigationRef}
        className="flex w-[100%]  items-center justify-between"
      >
        {/* <nav className="flex w-[100%] justify-between gap-2 text-4xl">
          <Link
            href={`/projects/${
              illustrations[managePreviousIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("backwards")}
          >
            <AiOutlineArrowLeft />
          </Link>

          <GoToTopButton onClick={() => setScrollToTop(true)} />

          <Link
            href={`/projects/${
              illustrations[manageNextIndex(currentIndex)]?.path
            }`}
            onClick={() => handleNavigation("forward")}
          >
            <AiOutlineArrowRight />
          </Link>
        </nav> */}
      </div>
    </main>
  );
}
