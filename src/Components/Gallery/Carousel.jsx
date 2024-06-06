import React from "react";
import "../../styles/App.css";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import ThirtyThree from "../../assets/img/33.jpg";
import ThirtyFive from "../../assets/img/35.jpg";
import ThirtySix from "../../assets/img/36.jpg";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  draggable: true,
  pageDots: true,
  imagesLoaded: true,
};

const Carousel = () => {
  const cardsData = [
    {
      image: ThirtyThree,
      title: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: ThirtyFive,
      title: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: ThirtySix,
      title: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  return (
    <section className="pt-5 pt-md-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Take a sneak peek</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Asperiores temporibus fuga possimus labore ex porro pariatur sed,
              nisi dolor, nobis architecto. Placeat facilis voluptas alias
              ducimus.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Carousel */}
            <Flickity elementType={"div"} options={flickityOptions}>
              {cardsData.map((card, index) => (
                <figure
                  className="w-100 flickity-cell"
                  aria-hidden="true"
                  key={index}
                >
                  <img
                    className="img-fluid mb-4"
                    src={card.image}
                    alt={`Image ${index + 1}`}
                  />
                  <figcaption className="text-center text-gray">
                    {card.title}
                  </figcaption>
                </figure>
              ))}
            </Flickity>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
