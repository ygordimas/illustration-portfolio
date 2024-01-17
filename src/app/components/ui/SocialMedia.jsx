import React from "react";
import { motion } from "framer-motion";

import { TfiLinkedin, TfiInstagram, TfiGithub } from "react-icons/tfi";

function SocialMedia() {
  const iconsStyles = "w-fit h-fit rounded-full bg-myblue-100 p-2";

  return (
    <motion.div
      layout
      className="flex items-center justify-center  justify-self-end text-2xl"
    >
      <div className="flex items-center gap-8 rounded-full bg-mygreen-500 p-2">
        <div className={iconsStyles}>
          <TfiLinkedin />
        </div>
        <div className={iconsStyles}>
          <TfiInstagram />
        </div>
        <div className={iconsStyles}>
          <TfiGithub />
        </div>
      </div>
    </motion.div>
  );
}

export default SocialMedia;
