"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoundButton from "./RoundButton";
import Image from "next/image";

export default function ContactButton() {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/contact" && (
        <Link href="/contact" className="fixed bottom-2 right-0">
          <RoundButton direction="row-reverse" cta="contact">
            {/* <AiOutlineMail /> */}
            <Image
              src="/ICONS/envelope.png"
              width={512}
              height={512}
              className="w-[60%]"
            />
          </RoundButton>
        </Link>
      )}
    </>
  );
}
