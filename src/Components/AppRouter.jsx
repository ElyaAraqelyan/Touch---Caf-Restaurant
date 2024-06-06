import React from "react";
import { Route, Routes } from "react-router-dom";
import MAIN from "./MAIN";
import AboutUs from "./AboutUs/AboutUs";
import MainMenu from "./Menu/MainMenu";
import MainReservation from "./Reservation/MainReservation";
import MainNews from "./NewsAndEvents/MainNews";
import MainGallery from "./Gallery/MainGallery";
import MainContact from "./ContactUs/MainContact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<MAIN />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<MainMenu />} />
      <Route path="/reservation" element={<MainReservation />} />
      <Route path="/newsAndEvents" element={<MainNews />} />
      <Route path="/gallery" element={<MainGallery />} />
      <Route path="/contactUs" element={<MainContact />} />
    </Routes>
  );
};

export default AppRouter;
