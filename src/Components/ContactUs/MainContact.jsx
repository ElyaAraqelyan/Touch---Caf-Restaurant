import React from "react";
import Map from "../../assets/img/map.jpg";
import ContactHeader from "./ContactHeader";
import Contact from "./Contact";
const MainContact = () => {
  return (
    <>
      <ContactHeader />
      <Contact />
      <img src={Map} alt="map" className="img-fluid w-100" />
    </>
  );
};

export default MainContact;
