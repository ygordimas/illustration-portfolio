"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const CustomizedLink = (title, href) => {
    return (
      <Link
        href={href}
        className={`border-2 px-4 text-2xl md:text-xl relative p-2 ${
          pathname === `${href}`
            ? "text-accent-500 bg-accent-50 border-accent-500 tracking-normal font-normal box-border"
            : "border-primary-50 font-light text-primary-500 tracking-wide hover:before:absolute hover:before:w-full hover:before:bottom-0 hover:before:left-0 hover:before:h-2 hover:before:bg-accent-500"
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
    <header className="w-full z-10 flex flex-col gap-2 md:gap-1 justify-between items-center p-8  md:flex-row">
      <div className="flex flex-col items-center cursor-default">
        <Link href={"/"}>
          <h1
            className={`font-display text-6xl md:text-4xl xl:text-5xl text-primary-500 tracking-wide`}
          >
            YGOR DIMAS
          </h1>
        </Link>

        <h2 className="text-primary-400 text-xl font-normal sm:hidden lg:block">
          ILLUSTRATOR & 3D ARTIST
        </h2>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-2 xl:flex-row ">
        <div className="flex items-center gap-2 md:gap-2 py-4">
          {CustomizedLink("Illustrations", "/")}
          {CustomizedLink("Game Art", "#")}
          {CustomizedLink("About Me", "/about")}
        </div>

        <Link
          href="/contact"
          className="font-display rounded-3xl bg-secondary-400  text-2xl md:text-xl tracking-wide xl:tracking-normal py-2 px-4 hover:bg-opacity-90 sm:hidden"
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
}
