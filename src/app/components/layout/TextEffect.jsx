import React from "react";

function TextEffect({ text, size, padding }) {
  return (
    <p
      className={`relative block h-fit w-fit ${size} mr-10 font-singoShadow text-myyellow-500`}
    >
      {text}
      <span
        className={`absolute left-[-1px] top-[-1px] ${size} font-singo text-myblue-950`}
      >
        {text}
      </span>
    </p>
  );
}

export default TextEffect;
