import { Young_Serif } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import ContactButton from "./components/ui/ContactButton";
import MobileNavMenu from "./components/mobileFooter/MobileNavMenu";
import Wrapper from "./components/layout/Wrapper";

import localFont from "next/font/local";
import { ScrollingContextProvider } from "./context/ScrollingContext";
import { GlobalContextProvider } from "./context/store";
import { ContactModalProvider } from "./context/ContactModalContext";

const display = localFont({
  src: "../../public/FONTS/quickremarks/quickremarks.ttf",
  variable: "--font-display",
});

// const mainfont = localFont({
//   src: [
//     // LIGHT
//     {
//       path: "../../public/FONTS/khand/Khand-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     // NORMAL
//     {
//       path: "../../public/FONTS/khand/Khand-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     // BOLD
//     {
//       path: "../../public/FONTS/khand/Khand-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-mainfont",
// });

const mainfont = localFont({
  src: [
    // LIGHT
    {
      path: "../../public/FONTS/nippo/Nippo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    // NORMAL
    {
      path: "../../public/FONTS/nippo/Nippo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // BOLD
    {
      path: "../../public/FONTS/nippo/Nippo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mainfont",
});

// const mainfont = localFont({
//   src: [
//     // LIGHT
//     {
//       path: "../../public/FONTS/teko/Teko-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     // NORMAL
//     {
//       path: "../../public/FONTS/teko/Teko-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     // BOLD
//     {
//       path: "../../public/FONTS/teko/Teko-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-mainfont",
// });

// const mainfont = localFont({
//   src: [
//     // LIGHT
//     {
//       path: "../../public/FONTS/millimetre/Millimetre-Light_web.woff",
//       weight: "300",
//       style: "normal",
//     },
//     // NORMAL
//     {
//       path: "../../public/FONTS/millimetre/Millimetre-Regular_web.woff",
//       weight: "400",
//       style: "normal",
//     },
//     // BOLD
//     {
//       path: "../../public/FONTS/millimetre/Millimetre-Bold_web.woff",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-mainfont",
// });

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
        className={`${mainfont.variable} ${display.variable} ${singo.variable} ${singoRound.variable} ${singoOutline.variable} ${singoShadow.variable} bg-mygreen-500 font-mainfont font-normal text-myblue-800`}
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
            <ContactModalProvider>
              <Wrapper>
                <Header />

                <MainContent children={children} />
              </Wrapper>
            </ContactModalProvider>
          </ScrollingContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
