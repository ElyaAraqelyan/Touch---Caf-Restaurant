import React from "react";
import "../styles/App.css";
import Flickity from "react-flickity-component";
import Twenty from "../assets/img/20.jpg";
import TwentyOne from "../assets/img/21.jpg";
import TwentyTwo from "../assets/img/22.jpg";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  draggable: true,
  pageDots: true,
  contain: true,
};

const Testimonials = () => {
  const cardsData = [
    {
      image: Twenty,
      quote:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. ",
      name: " LIAM SMITH",
    },
    {
      image: TwentyOne,
      quote:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. ",
      name: " OLIVIA JOHNSON",
    },
    {
      image: TwentyTwo,
      quote:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. ",
      name: " EMMA WILLIAMS",
    },
  ];

  return (
    <section className="py-5 py-md-9 border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Header */}
            <h2 className="mb-2 font-playfair">What clients say about us</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Slider */}
            <Flickity
              elementType={"div"}
              options={flickityOptions}
              imagesLoaded={true}
            >
              {cardsData.map((card, index) => (
                <div key={index} className="w-100 px-2 flickity-cell">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-8 col-md-3 order-md-1">
                      {/* Avatar */}
                      <img
                        className="img-fluid rounded-circle mb-4 mb-md-0"
                        src={card.image}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                    <div className="col-md-7 order-md-0">
                      {/* Blockquote */}
                      <figure className="mx-auto mb-0">
                        <blockquote className="blockquote mb-0">
                          <p className="font-playfair text-body-emphasis mb-5">
                            {card.quote}
                          </p>
                        </blockquote>
                        <figcaption className="blockquote-footer text-xs mb-0">
                          {card.name}
                        </figcaption>
                      </figure>
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

export default Testimonials;
