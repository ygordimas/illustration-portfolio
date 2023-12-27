import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-300 mt-2 flex w-full items-center justify-center gap-2 divide-x-2 py-2 text-xl text-primary-50">
      <div className="flex gap-1 text-4xl">
        <a href="https://x.com/ikyste" target="_blank">
          <AiFillTwitterCircle />
        </a>

        <a href="https://www.linkedin.com/in/ygor-dimas/" target="_blank">
          <AiFillLinkedin />
        </a>

        <a
          href="https://www.instagram.com/ygordimas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.instagram.com/ygordimas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="font-merriweather pl-2 text-sm">
        &#169; 2023 by Ygor Dimas
      </div>
    </footer>
  );
}
