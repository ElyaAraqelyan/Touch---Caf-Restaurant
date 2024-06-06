import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Components/navbar";
import "./styles/App.css";
import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer";
import { useLocation, useParams } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 90) {
      setIsNavbarWhite(true);
    } else {
      setIsNavbarWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarWhite]);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavBar
        toggleTheme={toggleTheme}
        isNavbarWhite={isNavbarWhite}
        setIsNavbarWhite={setIsNavbarWhite}
        pathName={path}
      />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
