import React from "react";
import { motion } from "framer-motion";

function TileSVG({ fillColor }) {
  return (
    <>
      <svg data-name="Layer 2" viewBox="0 0 500 500" className={`${fillColor}`}>
        <path
          d="m250 0 73.22 73.22h103.56v103.56L500 250l-73.22 73.22v103.56H323.22L250 500l-73.22-73.22H73.22V323.22L0 250l73.22-73.22V73.22h103.56L250 0z"
          data-name="Layer 1"
        />
      </svg>
    </>
  );
}

export default TileSVG;
