import Image from "next/image";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

function GalleryCard({ href, imageURL, label }) {
  const [iconBgScope, iconBgAnimate] = useAnimate();
  const handleHoverEnter = () => {
    iconBgAnimate(
      iconBgScope.current,
      iconBgVariants.animate,
      iconBgVariants.initial.transition,
    );
  };

  const handleHoverExit = () => {
    iconBgAnimate(
      iconBgScope.current,
      iconBgVariants.initial,
      iconBgVariants.initial.transition,
    );
  };
  const iconBgVariants = {
    initial: {
      backgroundColor: "rgb(253, 222, 225)",
      transition: {
        duration: 1,
      },
    },
    animate: {
      backgroundColor: "rgb(132, 216, 252)",
    },
  };

  return (
    <Link href={href}>
      <motion.div
        className="mx-2 box-border flex h-[24vh] w-[16vh] flex-col items-center"
        onHoverStart={() => handleHoverEnter()}
        onHoverEnd={() => handleHoverExit()}
      >
        <div className="round-lg relative flex w-full grow items-center justify-center border-4  border-myblue-100 [clip-path:polygon(0%_0%,calc(100%-1.6vh)_0%,100%_calc(0%+1.6vh),100%_100%,0%_100%)]">
          <div className="relative w-[72%] p-2">
            <Image src={imageURL} width={1024} height={1024} />
            <motion.div
              ref={iconBgScope}
              className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-mypink-200"
            ></motion.div>
          </div>

          <div className="z-4 absolute -right-[4px] -top-[4px] h-[1.6vh] w-[1.6vh] border-4 border-myblue-100 bg-myblue-200 "></div>
        </div>
        <p className="mt-2 flex-nowrap bg-myblue-100 px-1 py-0.5 font-semibold tracking-wide">
          {label}
        </p>
      </motion.div>
    </Link>
  );
}

export default GalleryCard;
