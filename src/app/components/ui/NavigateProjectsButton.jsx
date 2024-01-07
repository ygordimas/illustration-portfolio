import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function NavigateProjectsButton({ path, handleNavigation, children }) {
  return (
    <Link
      href={`/projects/${path}`}
      onClick={() => handleNavigation()}
      className="rounded-2xl bg-accent-400 text-6xl text-primary-50"
    >
      {children}
    </Link>
  );
}

export default NavigateProjectsButton;
