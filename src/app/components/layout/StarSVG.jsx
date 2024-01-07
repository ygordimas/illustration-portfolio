import React from "react";

function StarSVG({ color, size }) {
  const svgStyle = `${size} ${color} stroke-[20px] overflow-visible stroke-myblue-950`;
  return (
    <>
      <svg className={svgStyle} viewBox="0 0 512 512">
        <path d="m256 0 34.68 81.67 63.29-62.18.78 88.72 82.27-33.23-33.23 82.27 88.72.78-62.18 63.29L512 256l-81.67 34.68 62.18 63.29-88.72.78 33.23 82.27-82.27-33.23-.78 88.72-63.29-62.18L256 512l-34.68-81.67-63.29 62.18-.78-88.72-82.27 33.23 33.23-82.27-88.72-.78 62.18-63.29L0 256l81.67-34.68-62.18-63.29 88.72-.78-33.23-82.27 82.27 33.23.78-88.72 63.29 62.18L256 0z" />
      </svg>
    </>
  );
}

export default StarSVG;
