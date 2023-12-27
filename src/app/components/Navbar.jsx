"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const CustomizedLink = (title, href) => {
    return (
      <Link
        href={href}
        className={`relative rounded-full border-2 p-2 px-4 text-2xl md:text-xl ${
          pathname === `${href}`
            ? "box-border border-accent-500 bg-accent-50 font-normal tracking-normal text-accent-500"
            : "border-primary-50 font-light tracking-wide text-primary-500 hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-2 hover:before:w-full hover:before:bg-accent-500"
        }`}
        // className={`text-accent-950 bg-primary-300 px-4 text-2xl tracking-wide md:text-xl relative p-2 ${
        //   pathname === `${href}`
        //     ? "before:absolute before:w-full before:bottom-0 before:left-0 before:h-2 before:bg-accent-500"
        //     : ""
        // }`}
      >
        {title}
      </Link>
    );
  };

  return (
    <header className="z-10 flex w-full flex-col items-center justify-between gap-2 p-8 md:flex-row  md:gap-1">
      <div className="flex cursor-default flex-col items-center">
        <Link href={"/"}>
          <h1
            className={`font-display text-6xl tracking-wide text-primary-500 md:text-4xl xl:text-5xl`}
          >
            YGOR DIMAS
          </h1>
        </Link>

        <h2 className="text-xl font-normal text-primary-400 sm:hidden lg:block">
          ILLUSTRATOR & 3D ARTIST
        </h2>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-2 xl:flex-row ">
        <div className="flex items-center gap-2 py-4 md:gap-2">
          {CustomizedLink("Illustrations", "/")}
          {CustomizedLink("Game Art", "#")}
          {CustomizedLink("About Me", "/about")}
        </div>

        <Link
          href="/contact"
          className="bg-secondary-400 rounded-3xl px-4  py-2 font-display text-2xl tracking-wide hover:bg-opacity-90 sm:hidden md:text-xl xl:tracking-normal"
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
}
