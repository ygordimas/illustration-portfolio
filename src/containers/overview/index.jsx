"use client";

import React, { useRef } from "react";
import { abstracts } from "../../db/abstracts";
import { illustrations } from "../../db/illustrations";
import { gameart } from "../../db/gameart";
import OverviewHeader from "../../components/OverviewHeader";
import OverviewDescription from "../../components/OverviewDescription";
import OverviewMainImage from "../../components/OverviewMainImage";
import OverviewExtras from "../../components/OverviewExtras";
import { ViewModalContextProvider } from "../../context/ViewModalContext";

function Overview({ params }) {
  const wrapperRef = useRef(null);

  const fetchGallery = (gallery) => {
    if (gallery == "illustrations") {
      return illustrations;
    }
    if (gallery == "abstracts") {
      return abstracts;
    }
    if (gallery == "gameart") {
      return gameart;
    }
    return null;
  };

  const gallery = fetchGallery(params[0]);

  const fetchCurrentItem = (id) => {
    return gallery[id];
  };

  const currentItem = fetchCurrentItem(params[1]);

  const fetchPreviousItem = (id) => {
    if (id == 0) {
      return `/gallery/${params[0]}/${gallery.length - 1}`;
    } else if (id == gallery.length - 1) {
      return `/gallery/${params[0]}/0`;
    } else {
      return `/gallery/${params[0]}/${Number(id) - 1}`;
    }
  };

  const previousItem = fetchPreviousItem(params[1]);

  const fetchNextItem = (id) => {
    if (id == gallery.length - 1) {
      return `/gallery/${params[0]}/0`;
    } else {
      return `/gallery/${params[0]}/${Number(id) + 1}`;
    }
  };

  const nextItem = fetchNextItem(params[1]);

  return (
    <ViewModalContextProvider>
      <main
        ref={wrapperRef}
        className="relative flex w-full flex-col items-center justify-center gap-8"
      >
        <hr className="border-4 border-mypink-300" />
        <OverviewHeader
          currentItem={currentItem}
          previousItem={previousItem}
          nextItem={nextItem}
        />
        <OverviewDescription currentItem={currentItem} />

        <hr className="border-4 border-mypink-300" />

        <OverviewMainImage currentItem={currentItem} />
        <hr className="border-4 border-mypink-300" />
        <OverviewExtras currentItem={currentItem} />
      </main>
    </ViewModalContextProvider>
  );
}

export default Overview;
