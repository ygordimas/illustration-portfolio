import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function GalleryCard({ href, imageURL, label }) {
  return (
    <Link href={href}>
      <div className="mx-2 box-border flex h-[24vh] w-[16vh] flex-col items-center">
        <div className="round-lg relative flex w-full grow items-center justify-center border-4  border-myblue-100 [clip-path:polygon(0%_0%,calc(100%-1.6vh)_0%,100%_calc(0%+1.6vh),100%_100%,0%_100%)]">
          <div className="relative w-[72%] p-2">
            <Image
              src={"/ICONS/gallery-icon-illustrations.png"}
              width={1024}
              height={1024}
            />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-myblue-100"></div>
          </div>

          <div className="z-4 absolute -right-[4px] -top-[4px] h-[1.6vh] w-[1.6vh] border-4 border-myblue-100 bg-myblue-200 "></div>
        </div>
        <p className="mt-2 flex-nowrap bg-myblue-100 px-1 py-0.5 font-semibold tracking-wide">
          {label}
        </p>
      </div>
    </Link>
  );
}

export default GalleryCard;
