import React from "react";

function EightPoints({ size = "", fill = "", props }) {
  return (
    <div {...props}>
      <svg
        data-name="Layer 2"
        viewBox="0 0 500 500"
        className={`fill-myblue-100 ${size} ${fill} overflow-visible stroke-myblue-800 stroke-[16px]`}
      >
        <path
          d="m250 46.51 11.14-15.25C307.86-32.7 408.99 9.19 396.8 87.45l-2.91 18.66 18.66-2.91c78.26-12.19 120.15 88.94 56.19 135.66L453.49 250l15.25 11.14c63.96 46.72 22.07 147.85-56.19 135.66l-18.66-2.91 2.91 18.66c12.19 78.26-88.94 120.15-135.66 56.19L250 453.49l-11.14 15.25c-46.72 63.96-147.85 22.07-135.66-56.19l2.91-18.66-18.66 2.91C9.19 408.99-32.7 307.86 31.26 261.14L46.51 250l-15.25-11.14C-32.7 192.14 9.19 91.01 87.45 103.2l18.66 2.91-2.91-18.66C91.01 9.19 192.14-32.7 238.86 31.26L250 46.51Z"
          data-name="Layer 1"
        />
      </svg>
    </div>
  );
}

export default EightPoints;
