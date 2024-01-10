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

  const { scrollingProgress } = useScrollingContext();

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
      className="relative my-2 flex w-full flex-col items-center justify-center gap-4 text-accent-900"
    >
      {/* *****NAVIGATION OVERLAY***** */}
      <motion.div
        ref={buttonRef}
        variants={goToTopButtonVariant}
        initial="hide"
        animate={scrollingProgress > 0.1 ? "show" : "hide"}
        className="fixed bottom-[2vh] left-0 z-10 flex w-full items-center justify-between  px-8 opacity-0"
      >
        <NavigateProjectsButton
          path={illustrations[managePreviousIndex(currentIndex)]?.path}
          handleNavigation={() => handleNavigation("previous")}
          direction="left"
        />

        <GoToTopButton />
        <NavigateProjectsButton
          path={illustrations[manageNextIndex(currentIndex)]?.path}
          handleNavigation={() => handleNavigation("next")}
        >
          <AiOutlineArrowRight />
        </NavigateProjectsButton>
      </motion.div>

      <nav className="flex w-full max-w-5xl items-center justify-between gap-2 text-4xl">
        <NavigateProjectsButton
          path={illustrations[managePreviousIndex(currentIndex)]?.path}
          handleNavigation={() => handleNavigation("previous")}
          direction="left"
        />
        <h2 className="flex h-full grow justify-center rounded-full border-4 border-myblue-950 bg-myyellow-500 p-6 font-singoRound text-myblue-950 ">
          {project.type}
        </h2>

        <NavigateProjectsButton
          path={illustrations[manageNextIndex(currentIndex)]?.path}
          handleNavigation={() => handleNavigation("next")}
          direction="right"
        />
      </nav>

      <div className="flex w-full max-w-5xl flex-col items-center gap-2 px-2 text-2xl">
        <p className="font-normal text-myblue-950">{project.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-0.5">
          {project.tools.map((tag, index) => (
            <Tags tag={tag} id={index} />
          ))}
        </div>
      </div>

      <hr className="w-full border-4 border-myblue-950" />

      <div className="flex flex-col justify-center gap-4 ">
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className=""
        />

        {project.wips && (
          <>
            <hr className="h-1 w-full bg-accent-500" />

            <div className="grid max-w-5xl grid-cols-2 gap-4">
              {extraImages()}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
