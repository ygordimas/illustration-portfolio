"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full z-10 flex justify-between items-center p-8">
      <div className="flex flex-col items-center cursor-default">
        <Link href={"/"}>
          <h1 className="text-5xl text-accent-400 font-mainfont">YGOR DIMAS</h1>
        </Link>

        <h2 className="text-accent-300">ILLUSTRATOR & 3D ARTIST</h2>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={`rounded-3xl text-stone-900 p-2 ${
            pathname === "/"
              ? "border-2 rounded-md border-secondary-400"
              : "border-none"
          }`}
        >
          Illustrations
        </Link>
        <Link
          href="#"
          className={`rounded-3xl text-stone-900 p-2  ${
            pathname === "/gameart"
              ? "border-2 rounded-md border-white"
              : "border-none"
          }`}
        >
          Game Art
        </Link>
        <Link href="/about" className="rounded-3xl text-stone-900 px-1 py-2">
          About Me
        </Link>
        <Link
          href="/contact"
          className="rounded-3xl bg-accent-500 text-white py-2 px-4 hover:bg-opacity-90"
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
