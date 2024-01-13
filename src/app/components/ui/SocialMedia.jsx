import React from "react";

import { TfiLinkedin, TfiInstagram, TfiGithub } from "react-icons/tfi";

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-4 text-4xl">
      <TfiLinkedin />
      <TfiInstagram />
      <TfiGithub />
    </div>
  );
}

export default SocialMedia;
