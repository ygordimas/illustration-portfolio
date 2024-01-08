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

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, translateY: "0px" },
        overlayTransition,
      );
    } else {
      animate(
        scope.current,
        {
          opacity: 0,
          translateY: "-16px",
        },
        overlayTransition,
      );
    }
  }, [isInView]);

  const overlayTransition = {
    duration: 0.8,
    ease: [0.5, 1, 0.89, 1],
  };

  const eyeDesktopTransition = {
    delay: 0.5,
    duration: 1,
    ease: [0.34, 1.56, 0.64, 1],
  };

  const overlayVariant = {
    hide: {},
    show: {},
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
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-between "
        onClick={onClick}
        ref={container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          key="ribbon"
          className="font-singoRound relative gap-2 self-end pt-8 text-2xl sm:hidden lg:flex lg:items-center lg:justify-center"
          ref={eyeDesktop}
        >
          <motion.span
            className="rounded-full border-4 border-myblue-950 bg-myyellow-500 p-2 text-myblue-950"
            initial="hide"
            animate={isHovered ? "show" : "hide"}
            variants={eyeIconVariant}
          >
            <AiOutlineEye className="" />
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

        <AnimatePresence>
          {/* *********MOBILE OVERLAY STARTS********* */}
          <div className="relative flex w-full items-center justify-between">
            <motion.div
              key="overlay"
              className="w-fit -translate-y-[16px] rounded-tr-full border-4 border-myblue-950 bg-mygreen-500 px-4 py-4 font-medium text-primary-600 opacity-0"
              ref={scope}
            >
              <h2 className="font-singoRound mr-14 text-2xl tracking-wide text-myblue-950">
                {getUppercaseTitle(image.path)}
              </h2>
              <h3 className="w-fit rounded-lg bg-myblue-500 px-1.5 py-0.5 text-myblue-950">
                {image.type}
              </h3>
            </motion.div>
          </div>
          {/* *********MOBILE OVERLAY ENDS********* */}
        </AnimatePresence>
      </motion.div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
