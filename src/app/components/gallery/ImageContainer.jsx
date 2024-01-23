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
  const [container, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useWindowSize();

  const isInView = useInView(container, {
    once: false,
    amount: 0.9,
    margin: "0% 0% 0% 0%",
  });

  useEffect(() => {
    if (isInView && windowWidth < 1024) {
      animate(container.current, shadowAnimation.show);
    } else if (!isInView && windowWidth < 1024) {
      animate(container.current, shadowAnimation.hide);
    }
  }, [isInView, windowWidth]);

  const shadowAnimation = {
    show: {
      boxShadow: "inset 0px 0px 0px 8px rgba(3, 67, 95, 1)",
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      boxShadow: "inset 0px 0px 0px 8px rgba(3, 67, 95, 0)",
      transition: {
        duration: 0.5,
      },
    },
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

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
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl"
        onClick={onClick}
        ref={container}
        onHoverStart={() => handleMouseEnter()}
        onHoverEnd={() => handleMouseLeave()}
        whileHover={{
          boxShadow: "inset 0px 0px 0px 8px rgb(3, 67, 95, 1)",
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
      </motion.div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
