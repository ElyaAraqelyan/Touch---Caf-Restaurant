import React from "react";
import Gallery from "../Gallery";
import GalleryHeader from "./GalleryHeader";
import Carousel from "./Carousel";
import NewsLetter from "../NewsLetter";

const MainGallery = () => {
  return (
    <>
      <GalleryHeader />
      <Carousel />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default MainGallery;
