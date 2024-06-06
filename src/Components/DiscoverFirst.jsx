import React from "react";
import Second from "../assets/img/2.jpg";
import "../styles/App.css";

const DiscoverFirst = () => {
  return (
    <section className="pt-5 pt-md-9 discover">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {/* Divider */}
            <hr className="hr-sm text-primary" />
            {/* Text */}
            <p>Take a coffee break or enjoy a meal.</p>
          </div>
          <div className="col-md-4">
            {/* Media */}
            <div className="media-decoration media-decoration-1 mb-5 mb-md-0">
              {/* Border */}
              <div className="media-decoration-border"></div>
              {/* Image */}
              <img
                className="media-decoration-img img-fluid"
                src={Second}
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-5 align-self-center mx-auto">
            {/* Heading */}
            <h2 className="font-playfair">
              <em>Always</em> amazing experience
            </h2>
            {/* Text */}
            <p className="mb-0 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias veritatis nisi, consequatur, laborum libero a neque
              ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus
              facilis velit, voluptatibus!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverFirst;
