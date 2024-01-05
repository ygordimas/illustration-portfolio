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

  const isInView = useInView(container, {
    once: false,
    amount: 0.8,
    margin: "0% 0% 0% 0%",
  });

  // const [ribbonScope, animateRibbon] = useAnimate();
  // const ribbonIsInView = useInView(ribbonScope, {
  //   once: false,
  //   amount: 1,
  //   margin: "0% 0% -30% 0%",
  // });

  // const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      // animate(scope.current, { opacity: 1, translateY: "16px" });
      // animate(ribbonScope.current, { scale: [1.2, 1, 1.2, 1], opacity: 1 });
    } else {
      // animate(scope.current, {
      //   opacity: 0,
      //   translateY: "-16px",
      // });
      // animate(ribbonScope.current, { opacity: 0 });
    }
  }, [isInView]);

  const overlayVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Link
      href={`/projects/${image.path}`}
      className="group relative overflow-hidden rounded "
      onClick={() => onClick()}
      key={image.id}
    >
      <div className="lg:bg-secondary-400 hidden group-hover:opacity-100 lg:visible lg:absolute lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:rounded lg:opacity-0">
        <p className="bg-primary-500 p-10">{image.type}</p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mb-2 rounded"
      />

      {/* ********OVERLAY START********* */}
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-end "
        onClick={onClick}
        ref={container}
      >
        <AnimatePresence>
          {/* *********RIBBON STARTS********** */}
          {/* <div
            key="ribbon"
            ref={ribbonScope}
            className="absolute bottom-0 right-0 m-4 flex items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-600 opacity-0"
          >
            <AiOutlineEye className="text-4xl" />
            <p className="ml-8 text-xl font-medium">click for more</p>
          </div> */}
          {/* *********RIBBON ENDS********** */}

          {/* *********MOBILE OVERLAY STARTS********* */}
          {/* <div
            key="description"
            layout
            className="w-fit -translate-y-[16px] rounded-tr-full bg-primary-50 p-8 font-medium text-primary-600 opacity-0"
            ref={scope}
          >
            <h2 className="mr-8">{getUppercaseTitle(image.path)}</h2>
            <h3>{image.type}</h3>
          </div> */}
          {/* *********MOBILE OVERLAY ENDS********* */}
        </AnimatePresence>
      </div>
      {/* ********OVERLAY ENDS********* */}
    </Link>
  );
}
