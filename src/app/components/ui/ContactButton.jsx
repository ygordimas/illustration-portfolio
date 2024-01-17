"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RoundButton from "./RoundButton";
import Image from "next/image";
import { useContactModalContext } from "../../context/ContactModalContext";

export default function ContactButton({ styles }) {
  const { setOpenModal } = useContactModalContext();
  return (
    <div onClick={() => setOpenModal(true)} className={styles}>
      <div className="border-myblue-800 font-singoRound">Contact</div>
    </div>
  );
}
