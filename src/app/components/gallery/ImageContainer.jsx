import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useAnimationControls,
  useAnimate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef } from "react";
import getUppercaseTitle from "../../utils/getUppercaseTitle";
import { AiOutlineEye } from "react-icons/ai";

export default function ImageContainer({ image, onClick }) {
  const container = useRef(null);
  const [scope, animate] = useAnimate();
  const [eye, animateEye] = useAnimate();

  const isInView = useInView(container, {
    once: false,
    amount: 0.8,
    margin: "0% 0% 0% 0%",
  });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, translateY: "16px" },
        overlayTransition,
      );
      animateEye(eye.current, { opacity: 1, translateY: "0px" }, eyeTransition);
    } else {
      animate(
        scope.current,
        {
          opacity: 0,
          translateY: "-16px",
        },
        overlayTransition,
      );
      animateEye(
        eye.current,
        { opacity: 0, translateY: "16px" },
        eyeTransition,
      );
    }
  }, [isInView]);

  const overlayTransition = {
    duration: 0.8,
    ease: [0.5, 1, 0.89, 1],
  };

  const eyeTransition = {
    delay: 0.5,
    duration: 1,
    ease: [0.34, 1.56, 0.64, 1],
  };

  const overlayVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
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
        className="mb-2 rounded-2xl"
      />

      {/* ********OVERLAY START********* */}
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-end "
        onClick={onClick}
        ref={container}
      >
        <AnimatePresence>
          {/* *********MOBILE OVERLAY STARTS********* */}
          <div className="relative flex w-full items-center justify-between">
            <motion.div
              key="overlay"
              className="w-fit -translate-y-[16px] rounded-tr-full bg-primary-50 p-8 font-medium text-primary-600 opacity-0"
              ref={scope}
            >
              <h2 className="mr-8 text-xl font-semibold tracking-wider">
                {getUppercaseTitle(image.path)}
              </h2>
              <h3>{image.type}</h3>
            </motion.div>
            <motion.div
              key="eye"
              ref={eye}
              className=" mr-8 translate-y-[200px] rounded-full bg-primary-500 opacity-0"
            >
              <AiOutlineEye className="p-2 text-6xl text-primary-50" />
            </motion.div>
          </div>
          {/* *********MOBILE OVERLAY ENDS********* */}
        </AnimatePresence>
      </div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
