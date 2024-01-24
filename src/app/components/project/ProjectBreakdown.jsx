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
import { motion, useInView, useAnimate, AnimatePresence } from "framer-motion";
import { useScrollingContext } from "../../context/ScrollingContext";
import GoToTopButton from "../../components/ui/GoToTopButton";
import NavigateProjectsButton from "../../components/ui/NavigateProjectsButton";
import { RiSearchEyeLine } from "react-icons/ri";
import { TiZoomIn } from "react-icons/ti";

export default function ProjectBreakdown({ project }) {
  const [openViewModal, setOpenViewModal] = useState(false);
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
    <>
      <main
        ref={wrapperRef}
        className="relative flex w-full flex-col items-center justify-center gap-8 text-accent-800"
      >
        <hr className="border-4 border-mypink-300" />
        <nav className="flex w-full max-w-5xl items-center justify-between gap-2 text-4xl">
          <NavigateProjectsButton
            path={illustrations[managePreviousIndex(currentIndex)]?.path}
            handleNavigation={() => handleNavigation("previous")}
            direction="left"
          />
          <h2 className="flex h-fit justify-center  bg-myyellow-500 p-6 font-mainfont text-2xl font-bold tracking-tight text-myblue-800">
            {project.type}
          </h2>

          <NavigateProjectsButton
            path={illustrations[manageNextIndex(currentIndex)]?.path}
            handleNavigation={() => handleNavigation("next")}
            direction="right"
          />
        </nav>

        <div className="flex w-full max-w-5xl flex-col items-center gap-8 px-2">
          <p className="font-mainfont text-base font-normal tracking-tight text-myblue-800">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-0.5">
            {project.tools.map((tag, index) => (
              <Tags tag={tag} id={index} />
            ))}
          </div>
        </div>

        <hr className="border-4 border-mypink-300" />

        <div className="relative flex flex-col justify-center ">
          <Image
            src={project.src}
            alt={project.alt}
            width={project.width}
            height={project.height}
            className="cursor-pointer"
            onClick={() => setOpenViewModal(true)}
          />
          <div className="absolute bottom-0 right-1 flex translate-y-1/2 gap-2  rounded-full  font-singoRound text-base tracking-wide text-myblue-800">
            <div className="rounded-full bg-mygreen-500 p-1 text-base text-myblue-800">
              <RiSearchEyeLine />
            </div>
            <p className="rounded-full bg-mygreen-500 px-2">Click to Expand</p>
          </div>
        </div>
        {project.wips && (
          <>
            <div className="flex h-fit w-full items-center justify-center bg-mypink-300 py-2 font-mainfont text-4xl font-bold tracking-wide text-mygreen-500">
              <p>behind the scenes & extras</p>
            </div>

            <div className="grid max-w-5xl grid-cols-2 gap-4">
              {extraImages()}
            </div>
          </>
        )}

        <hr className="border-4 border-mypink-300" />
      </main>
      <AnimatePresence mode="wait">
        {openViewModal && (
          <ViewModal
            project={project}
            onClick={() => setOpenViewModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const ViewModal = ({ project, onClick }) => {
  const modalVariant = {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    initial: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const imageVariant = {
    animate: {
      y: "0",
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
    initial: {
      y: "100vh",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      onClick={onClick}
      className="fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-2 bg-mygreen-200"
      variants={modalVariant}
      animate="animate"
      initial="initial"
      exit="initial"
    >
      <motion.div className="max-h-[90vh] w-[98vw]" variants={imageVariant}>
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className="pointer-events-none h-full w-full object-contain"
        />
      </motion.div>
      <p className="cursor-default rounded-full bg-mygreen-500 px-2 font-singoRound text-lg tracking-wide text-myblue-800">
        Click anywhere to return
      </p>
    </motion.div>
  );
};
