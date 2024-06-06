import React from "react";
import Reservation from "../Reservation";
import Map from "../../assets/img/map.jpg";
import ReservationHeader from "./ReservationHeader";
import Phone from "./Phone";

const MainReservation = () => {
  return (
    <div id="reservation">
      <ReservationHeader />
      <Reservation />
      <Phone />
      <img src={Map} alt="map" className="img-fluid w-100" />
    </div>
  );
};

export default MainReservation;
