import React from "react";
import TwentySixth from "../assets/img/26.jpg";
import TwentySeventh from "../assets/img/27.jpg";
import TwentyEighth from "../assets/img/28.jpg";
import TwentyNinth from "../assets/img/29.jpg";
import Thirtieth from "../assets/img/30.jpg";
import ThirtyFirst from "../assets/img/31.jpg";

const Menu = () => {
  return (
    <section className="menu py-5 py-md-9 border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Menu options</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              numquam eos perferendis itaque hic unde, ad, laudantium minima.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* Navigation */}
            <div
              className="nav justify-content-center mb-6"
              id="menuTabs"
              role="tablist"
            >
              <a
                href="#mains"
                id="mainsTab"
                className="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="true"
              >
                Mains
              </a>
              <a
                href="#lunch"
                id="lunchTab"
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                lunch
              </a>
              <a
                href="#dinner"
                id="dinnerTab"
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                dinner
              </a>
              <a
                href="#drinks"
                id="drinksTab"
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-selected="false"
              >
                drinks
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Content */}
            <div className="tab-content" id="menuContent">
              <div
                className="tab-pane fade active show"
                id="mains"
                role="tabpanel"
                aria-labelledby="mainsTab"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySixth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySeventh}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyEighth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyNinth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={Thirtieth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={ThirtyFirst}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="lunch"
                role="tabpanel"
                aria-labelledby="lunchTab"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySeventh}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySixth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyNinth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyEighth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={ThirtyFirst}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={Thirtieth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="dinner"
                role="tabpanel"
                aria-labelledby="dinnerTab"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyEighth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySixth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyNinth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySeventh}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={Thirtieth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={ThirtyFirst}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="drinks"
                role="tabpanel"
                aria-labelledby="drinksTab"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySixth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={Thirtieth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Lorem ipsum dolor sit amet
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $15
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyNinth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentySeventh}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={TwentyEighth}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce id ante ut arcu
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="py-3 border-bottom">
                      <div className="row">
                        <div className="col-3 align-self-center">
                          {/* Image */}
                          <div className="ratio ratio-1x1">
                            <img
                              className="object-fit-cover"
                              src={ThirtyFirst}
                              alt="..."
                            />
                          </div>
                        </div>
                        <div className="col-7">
                          {/* Heading */}
                          <h5 className="mb-2 font-playfair">
                            Fusce sed dolor eget tortor
                          </h5>
                          {/* Text */}
                          <p className="mb-0 text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Modi, obcaecati! Sapiente laudantium.
                          </p>
                        </div>
                        <div className="col-2">
                          {/* Price */}
                          <div className="fs-4 font-playfair text-center">
                            $16
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
