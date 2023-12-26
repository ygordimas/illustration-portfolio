"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function ContactButton() {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/contact" && (
        <Link
          href="/contact"
          className="font-display h-20 bg-accent-500 flex items-center content-between fixed bottom-2 right-0 text-2xl"
        >
          <div className="bg-primary-400 h-full flex items-center px-2">
            <AiOutlineMail className=" text-accent-500" />
          </div>
          <p className="flex items-center h-full bg-accent-500 px-2">contact</p>
        </Link>
      )}
    </>
  );
}
