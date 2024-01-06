import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function NavigateProjectsButton({ path, handleNavigation, children }) {
  return (
    <Link
      href={`/projects/${path}`}
      onClick={() => handleNavigation("next")}
      className="bg-accent-400 p-8"
    >
      {children}
    </Link>
  );
}

export default NavigateProjectsButton;
