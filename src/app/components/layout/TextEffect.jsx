import React from "react";

function TextEffect({
  text,
  size,
  padding = "",
  font = "font-singoRound",
  fill,
}) {
  return (
    <p
      className={`relative block h-fit w-fit ${size} mr-0 text-myblue-800 ${padding} ${font}`}
      style={{
        textShadow: `2px 2px 0px ${fill}`,
      }}
    >
      {text}
    </p>
  );
}

export default TextEffect;
