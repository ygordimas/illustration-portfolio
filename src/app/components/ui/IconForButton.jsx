import React from "react";

function IconForButton({ children }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
      {children}
    </div>
  );
}

export default IconForButton;
