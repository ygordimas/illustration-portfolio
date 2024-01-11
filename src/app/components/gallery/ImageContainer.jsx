"use client";
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
import useWindowSize from "../../hooks/useWindowSize";
import ViewOverlay from "./ViewOverlay";
import TitleOverlay from "./TitleOverlay";

export default function ImageContainer({ image, onClick }) {
  const container = useRef(null);
  const [scope, animate] = useAnimate();
  const [eyeDesktop, animateEyeDesktop] = useAnimate();

  const [isHovered, setIsHovered] = useState(false);

  const windowWidth = useWindowSize();

  useEffect(() => {}, [isHovered]);

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
      // handleAnimateEnter();
    } else {
      // handleAnimateExit();
    }
  }, [isInView]);

  const overlayVariant = {
    hide: { opacity: 0, x: "-32px", borderColor: "rgba(2, 39, 55, 1)" },
    show: { opacity: 1, x: "0px" },
  };

  const overlayTransition = {
    duration: 0.4,
    ease: [0.5, 1, 0.89, 1],
    type: "tween",
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
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-2xl"
        onClick={onClick}
        ref={container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          boxShadow: "inset 0px 0px 0px 8px rgba(2,39,55,1)",
        }}
      >
        <ViewOverlay
          isHovered={isHovered}
          isInView={isInView}
          windowWidth={windowWidth}
        />

        <TitleOverlay
          path={image.path}
          isHovered={isHovered}
          isInView={isInView}
          windowWidth={windowWidth}
        />
      </div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
