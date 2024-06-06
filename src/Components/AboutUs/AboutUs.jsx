import React from "react";
import Header from "./AboutHeader";
import DiscoverFirst from "../DiscoverFirst";
import Quote from "./Quote";
import Info from "./Info";
import Map from "../../assets/img/map.jpg";

const AboutUs = () => {
  return (
    <div id="about">
      <Header />
      <DiscoverFirst />
      <Quote />
      <Info />
      <img src={Map} alt="map" className="img-fluid w-100" />
    </div>
  );
};

export default AboutUs;
