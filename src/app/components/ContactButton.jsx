"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { usePathname } from "next/navigation";
import RoundButton from "./RoundButton";

export default function ContactButton() {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/contact" && (
        <Link href="/contact" className="fixed bottom-2 right-0">
          <RoundButton direction="row-reverse" cta="contact">
            <AiOutlineMail />
          </RoundButton>
        </Link>
      )}
    </>
  );
}
