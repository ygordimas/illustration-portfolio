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
      <div className=" border-myblue-800 ">Contact</div>
      <div className="absolute left-[-10%] top-[-40%] h-fit w-fit rounded-full bg-myyellow-500 pr-4 text-4xl">
        <LiaGrinWink className="" />
        <div className="absolute left-[58%] top-[-10%] h-fit w-fit rounded-full  bg-myyellow-500 text-3xl">
          <LiaHandPeace />
        </div>
      </div>
    </div>
  );
}
