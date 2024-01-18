import React from "react";
import { motion } from "framer-motion";

import { TfiLinkedin, TfiInstagram, TfiGithub } from "react-icons/tfi";

function SocialMedia() {
  const iconsStyles = "w-fit h-fit rounded-full bg-myblue-100 p-2";

  return (
    <motion.div
      layout
      className="pointer-events-auto flex items-center justify-center justify-self-end rounded-full border-4 border-myblue-800 text-2xl"
      style={{
        boxShadow:
          "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
      }}
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
