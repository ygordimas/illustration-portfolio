import { Young_Serif } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

import Header from "./components/nav/Header";
import MainContent from "./components/main/MainContent";
import ContactButton from "./components/ui/ContactButton";
import { GlobalContextProvider } from "./context/store";

import Wrapper from "./components/layout/Wrapper";

import localFont from "next/font/local";
import { ScrollingContextProvider } from "./context/ScrollingContext";

const display = localFont({
  src: "../../public/FONTS/elipse/elipse.otf",
  variable: "--font-display",
});

// const mainfont = localFont({
//   src: [
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/FONTS/lilgrotesk/LilGrotesk-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-mainfont",
// });

const mainfont = localFont({
  src: [
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/FONTS/lilgrotesk/LilGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mainfont",
});

const youngserif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-youngserif",
  weight: "400",
});

export const metadata = {
  title: "Ygor Dimas Portfolio",
  description: "Illustration and 3D art Portfolio by Ygor Dimas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainfont.variable} ${display.variable} ${youngserif.variable} font-mainfont font-thin`}
      >
        <GlobalContextProvider>
          <Head>
            <title>Ygor Dimas Portfolio</title>
            <meta
              name="description"
              content="3D artist and illustrator working with stylized art and asset creation."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <ScrollingContextProvider>
            <Wrapper>
              <Header />

              <MainContent children={children} />
            </Wrapper>
          </ScrollingContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
