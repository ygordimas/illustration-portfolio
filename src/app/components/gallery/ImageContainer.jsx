import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useAnimationControls,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import getUppercaseTitle from "../../utils/getUppercaseTitle";
import { AiOutlineEye } from "react-icons/ai";
import StarSVG from "../../components/layout/StarSVG";
import TextEffect from "../../components/layout/TextEffect";

export default function ImageContainer({ image, onClick }) {
  const container = useRef(null);
  const [scope, animate] = useAnimate();
  const [eyeDesktop, animateEyeDesktop] = useAnimate();

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const isInView = useInView(container, {
    once: false,
    amount: 0.8,
    margin: "0% 0% 0% 0%",
  });

  const handleAnimateEnter = async () => {
    await animate(scope.current, overlayVariant.show, overlayTransition);
    await animate(
      scope.current,
      overlayStrokeVariant.show,
      overlayDescriptionTransition,
    );
    await animate(
      "h3",
      overlayDescriptionVariant.show,
      overlayDescriptionTransition,
    );
  };

  const handleAnimateExit = async () => {
    await animate(scope.current, overlayVariant.hide, overlayTransition);
    await animate(
      scope.current,
      overlayStrokeVariant.hide,
      overlayDescriptionTransition,
    );
    await animate(
      "h3",
      overlayDescriptionVariant.hide,
      overlayDescriptionTransition,
    );
  };

  useEffect(() => {
    if (isInView) {
      // animate(
      //   scope.current,
      //   { opacity: 1, translateX: "0px", borderColor: "#FFF" },
      //   overlayTransition,
      // );
      handleAnimateEnter();
    } else {
      handleAnimateExit();
    }
  }, [isInView]);

  const overlayTransition = {
    duration: 0.4,
    ease: [0.5, 1, 0.89, 1],
  };

  const eyeDesktopTransition = {
    delay: 0.5,
    duration: 1,
    ease: [0.34, 1.56, 0.64, 1],
  };

  const overlayVariant = {
    hide: { opacity: 0, x: "-32px" },
    show: { opacity: 1, x: "0px" },
  };

  const overlayDescriptionVariant = {
    hide: { opacity: 0, x: "-32px", y: "-50%" },
    show: { opacity: 1, x: "0px", y: "-50%" },
  };

  const overlayDescriptionTransition = {
    duration: 0.2,
  };

  const overlayStrokeVariant = {
    hide: {
      borderColor: "rgba(2, 39, 55, 0)",
    },
    show: {
      borderColor: "rgba(2, 39, 55, 1)",
    },
  };

  const eyeRibbonVariant = {
    hide: {
      opacity: 0,
      x: "50%",
    },
    show: {
      opacity: 1,
      x: "0%",
    },
  };

  const eyeIconVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <Link
      href={`/projects/${image.path}`}
      className="group relative overflow-hidden rounded-2xl "
      onClick={() => onClick()}
      key={image.id}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mb-2 overflow-hidden rounded-2xl"
      />

      {/* ********OVERLAY START********* */}
      <motion.div
        className="absolute left-0 top-0 flex h-full w-full flex-col sm:justify-end lg:justify-between "
        onClick={onClick}
        ref={container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* *****EYE RIBBON STARTS***** */}
        <motion.div
          key="ribbon"
          className="relative gap-2 self-end pt-8 font-singoRound text-2xl sm:hidden lg:flex lg:items-center lg:justify-center"
          ref={eyeDesktop}
        >
          <motion.span
            className=" text-myblue-950"
            initial="hide"
            animate={isHovered ? "show" : "hide"}
            variants={eyeIconVariant}
          >
            <div className="relative flex h-fit w-fit content-center">
              <svg
                className="h-16 w-16 overflow-visible fill-myyellow-500 stroke-myblue-950 stroke-[20px]"
                viewBox="0 0 510.68 510.68"
              >
                <path d="M206.48 137.39 255.34 0l48.85 137.39 131.7-62.6-62.6 131.69 137.39 48.86-137.39 48.85 62.6 131.7-131.7-62.6-48.85 137.39-48.86-137.39-131.69 62.6 62.6-131.7L0 255.34l137.39-48.86-62.6-131.69 131.69 62.6z" />
              </svg>
              <span className="z-5 absolute left-[50%] top-[50%] flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 content-center">
                <AiOutlineEye className="block" />
              </span>
            </div>
          </motion.span>
          <motion.p
            className="block rounded-l-full bg-mygreen-500 px-2 py-1 pl-6 uppercase tracking-wide text-myblue-950 "
            variants={eyeRibbonVariant}
            initial="hide"
            animate={isHovered ? "show" : "hide"}
            transition={{ type: "tween" }}
          >
            View
          </motion.p>
        </motion.div>
        {/* *****EYE RIBBON ENDS***** */}

        <AnimatePresence>
          {/* ********* OVERLAY STARTS********* */}
          <div className="relative flex w-full items-center justify-between self-end ">
            <AnimatePresence>
              <motion.div
                key="overlay"
                className="relative w-fit rounded-bl-2xl rounded-tr-2xl border-4 border-myblue-950 border-opacity-0 bg-mygreen-500 px-4 py-4 font-medium text-primary-600 opacity-0"
                ref={scope}
                variants={overlayVariant}
                // animate={isInView ? "show" : "hide"}
                initial="hide"
                // transition={{ duration: 0.6 }}
              >
                <TextEffect
                  text={getUppercaseTitle(image.path)}
                  size={`text-2xl`}
                />

                <h3 className="absolute left-2 top-0 block w-fit -translate-y-1/2 whitespace-nowrap rounded-lg border-4 border-myblue-950 bg-myblue-500 px-1.5 py-0.5 text-myblue-950 opacity-0">
                  {image.type}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* ********* OVERLAY ENDS********* */}
        </AnimatePresence>
      </motion.div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
