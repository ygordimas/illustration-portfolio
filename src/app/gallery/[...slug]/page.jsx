"use client";

import React from "react";
import ImageGallery from "../../../components/ImageGallery";
import Overview from "../../../containers/overview";

function Gallery({ params }) {
  if (params.slug.length == 1) {
    return <ImageGallery params={params.slug} />;
  } else if (params.slug.length == 2) {
    return <Overview params={params.slug} />;
  } else {
    return <p>Not found.</p>;
  }
}

export default Gallery;
