import React from "react";
import { motion } from "framer-motion";

import { TfiLinkedin, TfiInstagram, TfiGithub } from "react-icons/tfi";

function SocialMedia() {
  const iconsStyles = "w-fit h-fit rounded-full bg-myblue-100 p-2";

  return (
    <motion.div
      layout
      className="pointer-events-auto flex justify-center justify-self-end rounded-full border-4 border-myblue-800 text-2xl"
      style={{
        boxShadow:
          "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
      }}
    >
      <div className="flex items-center gap-8 rounded-full bg-mygreen-500 p-2">
        <motion.a
          className={iconsStyles}
          target="_blank"
          href="https://www.linkedin.com/in/ygor-dimas"
          whileHover={{
            backgroundColor: "#FAB7C0",
            transition: {
              duration: 0.2,
            },
          }}
        >
          <TfiLinkedin />
        </motion.a>
        <motion.a
          className={iconsStyles}
          target="_blank"
          href="https://www.instagram.com/ygordimas/"
          whileHover={{
            backgroundColor: "#FAB7C0",
            transition: {
              duration: 0.2,
            },
          }}
        >
          <TfiInstagram />
        </motion.a>
        <motion.a
          className={iconsStyles}
          target="_blank"
          href="https://github.com/ygordimas"
          whileHover={{
            backgroundColor: "#FAB7C0",
            transition: {
              duration: 0.2,
            },
          }}
        >
          <TfiGithub />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default SocialMedia;
