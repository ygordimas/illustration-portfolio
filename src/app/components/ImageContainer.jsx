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

export default function ImageContainer({ image, onClick }) {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope);

  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      console.log(scope.current);
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  const overlayVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  // const MobileOverlay = ({ image, onClick }) => {
  //   return (
  //     <div
  //       className="w-fit  rounded-tr-full bg-primary-50 p-8 opacity-0"
  //       ref={scope}
  //     >
  //       <h2>{image.path}</h2>
  //       <h3>{image.type}</h3>
  //     </div>
  //   );
  // };

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
      <div
        className="absolute left-0 top-0 flex h-full w-full flex-col justify-end "
        onClick={onClick}
      >
        <AnimatePresence>
          <div
            className="w-fit  rounded-tr-full bg-primary-50 p-8 opacity-0"
            ref={scope}
          >
            <h2>{image.path}</h2>
            <h3>{image.type}</h3>
          </div>
        </AnimatePresence>
      </div>
    </Link>
  );
}
