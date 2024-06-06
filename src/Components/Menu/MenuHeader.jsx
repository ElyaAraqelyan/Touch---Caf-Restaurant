import React from "react";

const MenuHeader = () => {
  return (
    <header id="menuHeader">
      <div className="pt-11 pb-8 pt-md-15 pb-md-13 bg-black bg-opacity-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              {/* Heading */}
              <h1 className="display-6 fw-bold text-white">Our menu</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
