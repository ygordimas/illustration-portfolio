"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full z-10 flex justify-between items-center bg-purple-300 p-8">
      <div className="flex flex-col items-center cursor-default">
        <h1 className="text-5xl">YGOR DIMAS</h1>
        <h2>ILLUSTRATOR & 3D ARTIST</h2>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={`rounded-3xl text-stone-900 p-2 ${
            pathname === "/"
              ? "border-2 rounded-md border-white"
              : "border-none"
          }`}
        >
          Illustrations
        </Link>
        <Link
          href="#"
          className={`rounded-3xl text-stone-900 p-2 ${
            pathname === "/gameart"
              ? "border-2 rounded-md border-white"
              : "border-none"
          }`}
        >
          Game Art
        </Link>
        {/* <Link href="/about" className="rounded-3xl text-stone-900 px-1 py-2">
          About
        </Link> */}
        <Link
          href="/contact"
          className="rounded-3xl bg-white text-violet-600 p-2 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
