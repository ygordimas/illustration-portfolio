import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";

import { TfiLinkedin, TfiInstagram, TfiGithub } from "react-icons/tfi";
import { LuSparkle } from "react-icons/lu";

// function SocialMedia() {
//   const sparkleVariant = {
//     animate: {
//       top: "-0.25rem",
//       right: "-0.1rem",
//       opacity: 1,
//       scale: 1,
//       rotate: "-180deg",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     initial: {
//       top: "0.25rem",
//       right: "-0.1rem",
//       opacity: 0,
//       scale: 0,
//       rotate: "0deg",
//     },
//   };

//   const logoVariant = {
//     animate: {
//       backgroundColor: "#FAB7C0",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     initial: {
//       backgroundColor: "#84D8FC",
//     },
//   };

//   const Sparkle = () => {
//     return (
//       <motion.div
//         className="absolute top-1 h-fit w-fit rounded-full bg-myyellow-400 fill-myyellow-400 text-sm"
//         variants={sparkleVariant}
//       >
//         <LuSparkle />
//       </motion.div>
//     );
//   };

//   const MotionLink = ({ href, children }) => {
//     return (
//       <motion.a
//         className="pointer-events-auto relative h-fit w-fit rounded-full bg-myblue-100 p-2"
//         target="_blank"
//         href={href}
//         variants={logoVariant}
//         whileHover="animate"
//         initial="initial"
//       >
//         {children}
//         <Sparkle />
//       </motion.a>
//     );
//   };

//   return (
//     <motion.div
//       key="social"
//       layout
//       className="pointer-events-auto flex justify-center justify-self-end rounded-full border-4 border-myblue-800 text-lg"
//       style={{
//         boxShadow:
//           "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
//       }}
//     >
//       <div className="pointer-events-auto flex items-center gap-8 rounded-full bg-mygreen-500 p-2">
//         <MotionLink href="https://www.linkedin.com/in/ygor-dimas">
//           <TfiLinkedin />
//         </MotionLink>

//         <MotionLink href="https://www.instagram.com/ygordimas/">
//           <TfiInstagram />
//         </MotionLink>

//         <MotionLink href="https://github.com/ygordimas">
//           <TfiGithub />
//         </MotionLink>
//       </div>
//     </motion.div>
//   );
// }

const SocialMedia = forwardRef((props, ref) => {
  const sparkleVariant = {
    animate: {
      top: "-0.25rem",
      right: "-0.1rem",
      opacity: 1,
      scale: 1,
      rotate: "-180deg",
      transition: {
        duration: 0.2,
      },
    },
    initial: {
      top: "0.25rem",
      right: "-0.1rem",
      opacity: 0,
      scale: 0,
      rotate: "0deg",
    },
  };

  const logoVariant = {
    animate: {
      backgroundColor: "#FAB7C0",
      transition: {
        duration: 0.2,
      },
    },
    initial: {
      backgroundColor: "#84D8FC",
    },
  };

  const Sparkle = () => {
    return (
      <motion.div
        className="absolute top-1 h-fit w-fit rounded-full bg-myyellow-400 fill-myyellow-400 text-sm"
        variants={sparkleVariant}
      >
        <LuSparkle />
      </motion.div>
    );
  };

  const MotionLink = ({ href, children }) => {
    return (
      <motion.a
        className="pointer-events-auto relative h-fit w-fit rounded-full bg-myblue-100 p-2"
        target="_blank"
        href={href}
        variants={logoVariant}
        whileHover="animate"
        initial="initial"
      >
        {children}
        <Sparkle />
      </motion.a>
    );
  };

  return (
    <motion.div
      ref={ref}
      {...props}
      layout
      className="pointer-events-auto flex justify-center justify-self-end rounded-full border-4 border-myblue-800 text-lg"
      style={{
        boxShadow:
          "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
      }}
    >
      <div className="pointer-events-auto flex items-center gap-8 rounded-full bg-mypink-200 p-2">
        <MotionLink href="https://www.linkedin.com/in/ygor-dimas">
          <TfiLinkedin />
        </MotionLink>

        <MotionLink href="https://www.instagram.com/ygordimas/">
          <TfiInstagram />
        </MotionLink>

        <MotionLink href="https://github.com/ygordimas">
          <TfiGithub />
        </MotionLink>
      </div>
    </motion.div>
  );
});

SocialMedia.displayName = "MySocialMedia";

export default SocialMedia;
