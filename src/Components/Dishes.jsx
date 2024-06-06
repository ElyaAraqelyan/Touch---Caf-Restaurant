import React from "react";
import "../styles/App.css";
import "flickity/css/flickity.css";
import Flickity from "react-flickity-component";
import TwentySixth from "../assets/img/26.jpg";
import TwentySeventh from "../assets/img/27.jpg";
import TwentyEighth from "../assets/img/28.jpg";
import TwentyNinth from "../assets/img/29.jpg";
import Thirtieth from "../assets/img/30.jpg";
import ThirtyFirst from "../assets/img/31.jpg";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: false,
  draggable: true,
  pageDots: false,
  contain: true,
  cellALign: "left",
};

const Dishes = () => {
  const cardsData = [
    {
      image: TwentySixth,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$15",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
    {
      image: TwentySeventh,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$18",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
    {
      image: TwentyEighth,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$23",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
    {
      image: TwentyNinth,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$32",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
    {
      image: Thirtieth,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$15",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
    {
      image: ThirtyFirst,
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$42",
      description:
        "In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.",
    },
  ];
  return (
    <section className="py-5 py-md-9 overflow-hidden" id="Dishes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">
              Our <em>featured</em> dishes
            </h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              aliquam id sint accusamus eius voluptatum explicabo quae
              similique, quas.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Slider */}
            <Flickity
              className="flickity-viewport-visible"
              elementType={"div"}
              options={flickityOptions}
              disableImagesLoaded={false}
            >
              {cardsData.map((card, index) => (
                <div key={index} className="w-100 px-2 flickity-cell">
                  <div className="card border-0">
                    <img
                      className="card-image-top"
                      src={card.image}
                      alt={`Image ${index + 1}`}
                    />
                    <div className="card-body">
                      <div className="row mb-2">
                        <div className="col">
                          <h5 className="mb-0 font-playfair">{card.title}</h5>
                        </div>
                        <div className="col-auto">
                          <span className="fs-4 font-playfair text-body-emphasis">
                            {card.price}
                          </span>
                        </div>
                      </div>
                      <p className="mb-0 text-gray">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Flickity>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
