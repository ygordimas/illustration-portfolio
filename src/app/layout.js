import "./globals.css";
import React from "react";

import Head from "next/head";
import Link from "next/link";

import Header from "../containers/header";
import MainContent from "../containers/main-content";

import Wrapper from "../containers/wrapper";
import localFont from "next/font/local";
import { ScrollingContextProvider } from "../context/ScrollingContext";
import { GlobalContextProvider } from "../context/GlobalContext";
import { ContactModalProvider } from "../context/ContactModalContext";

import Stripes from "../components/SVGComponents/Stripes";

const display = localFont({
  src: "../../public/FONTS/quickremarks/quickremarks.ttf",
  variable: "--font-display",
});

const mainfont = localFont({
  src: [
    // LIGHT
    {
      path: "../../public/FONTS/jost/Jost-300-Light.otf",
      weight: "300",
      style: "normal",
    },
    // NORMAL
    {
      path: "../../public/FONTS/jost/Jost-400-Book.otf",
      weight: "400",
      style: "normal",
    },
    // BOLD
    {
      path: "../../public/FONTS/jost/Jost-700-Bold.otf",
      weight: "700",
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
        className={`${mainfont.variable} ${display.variable} ${singo.variable} ${singoRound.variable} relative bg-mygreen-500 font-mainfont font-normal text-myblue-800`}
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

                <MainContent>{children}</MainContent>
              </Wrapper>
            </ContactModalProvider>
          </ScrollingContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
