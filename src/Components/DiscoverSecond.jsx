import React from "react";
import Seventh from "../assets/img/7.jpg";
import "../styles/App.css";

const DiscoverSecond = () => {
  return (
    <section className="py-5 py-md-9">
      <div className="container">
        <div className="row">
          <div className="col-md-2 order-md-2 align-self-end">
            {/* Divider */}
            <hr className="hr-sm text-primary" />
            {/* Text */}
            <p>Great variety of foods you will enjoy.</p>
          </div>
          <div className="col-md-4 order-md-3">
            {/* Media */}
            <div className="media-decoration media-decoration-1 mb-5 mb-md-0">
              {/* Solid */}
              <div className="media-decoration-solid"></div>
              {/* Border */}
              <div className="media-decoration-border"></div>
              {/* Image */}
              <img
                className="media-decoration-img img-fluid"
                src={Seventh}
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-5 order-md-1 align-self-center mx-auto">
            {/* Heading */}
            <h2 className="font-playfair mb-2">
              <em>Beautiful</em> outdoor seating
            </h2>
            {/* Text */}
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              quae similique asperiores consequatur! Nihil temporibus qui enim.
              Accusamus voluptates a, et quidem! Quo, et?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSecond;
