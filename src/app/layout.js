import { Young_Serif } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

import Header from "./components/nav/Header";
import MainContent from "./components/main/MainContent";
import ContactButton from "./components/ui/ContactButton";
import MobileNavMenu from "./components/nav/MobileNavMenu";
import Wrapper from "./components/layout/Wrapper";

import localFont from "next/font/local";
import { ScrollingContextProvider } from "./context/ScrollingContext";
import { GlobalContextProvider } from "./context/store";

const display = localFont({
  src: "../../public/FONTS/quickremarks/quickremarks.ttf",
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

const singo = localFont({
  src: [
    {
      path: "../../public/FONTS/singo/Singo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FONTS/singo/SingoRegularItalic-Regular.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-singo",
});

const singoOutline = localFont({
  src: [
    {
      path: "../../public/FONTS/singo/SingoOutline-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FONTS/singo/SingoOutlineItalic-Regular.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-singoOutline",
});

const singoShadow = localFont({
  src: [
    {
      path: "../../public/FONTS/singo/SingoShadow-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FONTS/singo/SingoShadowItalic-Regular.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-singoShadow",
});

const singoRound = localFont({
  src: [
    {
      path: "../../public/FONTS/singo/SingoRounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/FONTS/singo/SingoRoundItalic-Regular.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-singoRound",
});

export const metadata = {
  title: "Ygor Dimas Portfolio",
  description: "Illustration and 3D art Portfolio by Ygor Dimas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainfont.variable} ${display.variable} ${singo.variable} ${singoRound.variable} ${singoOutline.variable} ${singoShadow.variable} bg-accent-500 font-mainfont font-thin text-myblue-800`}
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
