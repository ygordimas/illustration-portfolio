"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoundButton from "./RoundButton";
import Image from "next/image";
import { useContactModalContext } from "../../context/ContactModalContext";
import { LiaGrinWink, LiaHandPeace } from "react-icons/lia";

export default function ContactButton({ styles }) {
  const { setOpenModal } = useContactModalContext();
  return (
    <div onClick={() => setOpenModal(true)} className={`${styles} relative`}>
      <div className=" border-myblue-800 font-singoRound">Contact</div>
      <div className="absolute left-[-1rem] top-0 h-fit w-fit -translate-y-1/2 rounded-full bg-myyellow-500">
        <LiaGrinWink className="text-4xl" />
        <div className="absolute left-[1.95rem] top-0 h-fit w-fit  rounded-full bg-myyellow-500">
          <LiaHandPeace />
        </div>
      </div>
    </div>
  );
}
