import React from "react";
import "../styles/App.css";
import MyHeader from "../Components/MyHeader";
import DiscoverFirst from "../Components/DiscoverFirst";
import DiscoverSecond from "../Components/DiscoverSecond";
import Menu from "../Components/Menu";
import About from "../Components/About";
import Dishes from "../Components/Dishes";
import Reservation from "../Components/Reservation";
import Testimonials from "../Components/Testimonials";
import Events from "../Components/Events";
import NewsLetter from "../Components/NewsLetter";
import Gallery from "../Components/Gallery";
import Map from "../assets/img/map.jpg";

function MAIN() {
  return (
    <>
      <MyHeader />
      <DiscoverFirst />
      <DiscoverSecond />
      <About />
      <Menu />
      <Dishes />
      <Reservation />
      <Testimonials />
      <Events />
      <NewsLetter />
      <Gallery />
      <img src={Map} alt="map" className="img-fluid w-100" />
    </>
  );
}

export default MAIN;
