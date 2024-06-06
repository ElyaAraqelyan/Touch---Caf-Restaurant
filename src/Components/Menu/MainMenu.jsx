import React from "react";
import MenuHeader from "./MenuHeader";
import Menu from "../Menu";
import Dishes from "../Dishes";
import Reservation from "../Reservation";

const MainMenu = () => {
  return (
    <div>
      <MenuHeader />
      <Menu />
      <Dishes />
      <Reservation />
    </div>
  );
};

export default MainMenu;
