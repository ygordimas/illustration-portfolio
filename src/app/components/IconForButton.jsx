import React from "react";

function IconForButton({ children }) {
  return (
    <div className="h-20 w-20 rounded-full flex items-center justify-center bg-white">
      {children}
    </div>
  );
}

export default IconForButton;
