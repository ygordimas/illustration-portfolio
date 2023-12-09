import Image from "next/image";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { illustrations } from "./utils/illustrations";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="px-10">
      <Head>
        <title>Ygor Dimas Portfolio</title>
        <meta
          name="description"
          content="3D artist and illustrator working with stylized art and asset creation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-blue-700">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">YGOR DIMAS</h1>
          <ul className="flex items-center">
            <li>
              <a className="bg-cyan-200 px-4 py-2 rounded-md ml-4" href="#">
                Works
              </a>
            </li>
            <li>
              <a className="bg-cyan-200 px-4 py-2 rounded-md ml-4" href="#">
                About
              </a>
            </li>
            <li>
              <a className="bg-cyan-200 px-4 py-2 rounded-md ml-4" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
      </section>

      <Gallery illustrations={illustrations} />
    </main>
  );
}
