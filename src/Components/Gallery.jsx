import React, { useState, useEffect, useRef } from "react";
import Eleven from "../assets/img/11.jpg";
import Twelve from "../assets/img/12.jpg";
import Thirteen from "../assets/img/13.jpg";
import Fourteen from "../assets/img/14.jpg";
import Fifteen from "../assets/img/15.jpg";
import Sixteen from "../assets/img/16.jpg";
import Seventeen from "../assets/img/17.jpg";
import Eighteen from "../assets/img/18.jpg";
import { Modal } from "react-bootstrap";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

const images = [
  { src: Eleven, alt: "11" },
  { src: Sixteen, alt: "16" },
  { src: Thirteen, alt: "13" },
  { src: Fifteen, alt: "15" },
  { src: Fourteen, alt: "14" },
  { src: Eighteen, alt: "18" },
  { src: Seventeen, alt: "17" },
  { src: Twelve, alt: "12" },
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const isotopeContainer = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    // Initialize Isotope after images have loaded
    const isoInit = () => {
      iso.current = new Isotope(isotopeContainer.current, {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
      });

      const handleResize = () => {
        iso.current.layout();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        iso.current.destroy();
        window.removeEventListener("resize", handleResize);
      };
    };

    // Wait until images are loaded to initialize Isotope
    imagesLoaded(isotopeContainer.current, { background: true }, isoInit);
  }, []);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-5 py-md-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Our gallery</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="row gx-3" data-isotope ref={isotopeContainer}>
          {images.map((image, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 grid-item">
              <a
                href="#"
                className="d-block mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(image.src);
                }}
              >
                <img src={image.src} alt={image.alt} className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="img-fluid" />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;
