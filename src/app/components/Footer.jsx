import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-full text-primary-50 bg-secondary-300 py-2 text-xl flex gap-2 mt-2 items-center justify-center divide-x-2">
      <div className="flex text-4xl gap-1">
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
      <div className="font-merriweather text-sm pl-2">
        &#169; 2023 by Ygor Dimas
      </div>
    </footer>
  );
}
