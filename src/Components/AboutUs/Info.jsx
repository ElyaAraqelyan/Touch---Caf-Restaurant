import React from "react";
import TwentyFour from "../../assets/img/24.jpg";

const Info = () => {
  return (
    <section className="py-5 py-md-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Behind the scenes</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              obcaecati sit odio velit culpa aspernatur consectetur natus quidem
              minima veritatis.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 order-md-2">
            {/* Image */}
            <img
              src={TwentyFour}
              alt="24"
              className="img-fluid mw-md-120 clip-top-start"
            />
          </div>
          <div className="col-md-5 order-md-1">
            {/* Text */}
            <p className="lead text-body-emphasis">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident sequi ratione, accusamus quo mollitia architecto,
              explicabo obcaecati.
            </p>
            {/* Text */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              enim saepe aperiam eius, quam blanditiis necessitatibus dolorem
              dignissimos pariatur quas velit nihil tempora, libero unde
              molestiae! Illum, inventore. Iusto, autem!
            </p>

            {/* Text */}
            <p className="mb-md-0">
              <a
                className="btn btn-outline-primary text-black"
                href="/contactUs"
              >
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
