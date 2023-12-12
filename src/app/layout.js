import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Navbar from "./components/Navbar";

const mainfont = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-mainfont",
});

export const metadata = {
  title: "Ygor Dimas Portfolio",
  description: "Illustration and 3D art Portfolio by Ygor Dimas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainfont.variable} font-mainfont`}>
        <div className="h-full w-full flex flex-col align-center overflow-hidden bg-amber-300">
          <Head>
            <title>Ygor Dimas Portfolio</title>
            <meta
              name="description"
              content="3D artist and illustrator working with stylized art and asset creation."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />

          <main className="flex flex-col grow overflow-auto bg-violet-100">
            <div className="grow">{children}</div>

            <footer className="h-[60px] bg-purple-300 text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillInstagram />
              <div>&#169; 2023 by Ygor Dimas</div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
