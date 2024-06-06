import React from "react";

const Events = () => {
  return (
    <section className="pt-5 pt-md-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Header */}
            <h2 className="mb-2 font-playfair">Upcoming events</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Commodi rem veritatis quis eaque mollitia.
            </p>
          </div>
        </div>
      </div>
      <div className="events">
        <div className="event">
          <div className="event-sm collapse">
            <div className="container">
              <div className="row align-items-center py-6">
                <div className="col-3 col-md-2 col-lg-1">
                  {/* Date */}
                  <time
                    className="d-block text-center text-body-emphasis"
                    dateTime="2024-09-30"
                  >
                    <span className="d-block mb-2 display-6 font-playfair">
                      30
                    </span>
                    <span>Sep</span>
                  </time>
                </div>
                <div className="col-9 col-md-7 col-lg-8">
                  <div
                    className="h4 mb-4 mb-md-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#eventOne"
                    aria-controls="eventOne"
                    role="button"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum voluptas, aut ea quae!
                  </div>
                </div>
                <div className="col-9 offset-3 col-md-3 offset-md-0 text-md-right">
                  {/* Button */}
                  <a
                    href="#section-reservation"
                    className="btn btn-outline-primary text-black text-primary-hover"
                  >
                    Reserve a table
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="event-lg collapse show bg-cover" id="eventOne">
            <div className="bg-black bg-opacity-50">
              <div className="container">
                <div className="row py-10">
                  <div className="col-md-8 col-lg-5">
                    {/* Date */}
                    <h3 className="text-xs text-primary">
                      <time dateTime="2024-09-30">September 30, 2024</time>
                    </h3>
                    {/* Heading */}
                    <h2 className="mb-3 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum voluptas, aut ea quae!
                    </h2>
                    {/* Description */}
                    <p className="mb-6 text-white text-opacity-75">
                      Alias earum, labore doloremque iusto a modi et, dolorem
                      veritatis iste quis ab. Facere est optio, voluptate
                      molestias aspernatur impedit perferendis odit?
                    </p>
                    {/* Button */}
                    <a
                      href="#"
                      className="btn btn-outline-primary text-white text-primary-hover"
                    >
                      Reserve a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-sm collapse show">
            <div className="container">
              <div className="row align-items-center py-6">
                <div className="col-3 col-md-2 col-lg-1">
                  {/* Date */}
                  <time
                    className="d-block text-center text-body-emphasis"
                    dateTime="2024-09-29"
                  >
                    <span className="d-block mb-2 display-6 font-playfair">
                      30
                    </span>
                    <span>Sep</span>
                  </time>
                </div>
                <div className="col-9 col-md-7 col-lg-8">
                  <div
                    className="h4 mb-4 mb-md-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#eventTwo"
                    aria-controls="eventTwo"
                    role="button"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum voluptas, aut ea quae!
                  </div>
                </div>
                <div className="col-9 offset-3 col-md-3 offset-md-0 text-md-right">
                  {/* Button */}
                  <a
                    href="#section-reservation"
                    className="btn btn-outline-primary text-black text-primary-hover"
                  >
                    Reserve a table
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="event-lg collapse bg-cover" id="eventTwo">
            <div className="bg-black bg-opacity-50">
              <div className="container">
                <div className="row py-10">
                  <div className="col-md-8 col-lg-5">
                    {/* Date */}
                    <h3 className="text-xs text-primary">
                      <time dateTime="2024-09-30">September 30, 2024</time>
                    </h3>
                    {/* Heading */}
                    <h2 className="mb-3 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum voluptas, aut ea quae!
                    </h2>
                    {/* Description */}
                    <p className="mb-6 text-white text-opacity-75">
                      Alias earum, labore doloremque iusto a modi et, dolorem
                      veritatis iste quis ab. Facere est optio, voluptate
                      molestias aspernatur impedit perferendis odit?
                    </p>
                    {/* Button */}
                    <a
                      href="#"
                      className="btn btn-outline-primary text-white text-primary-hover"
                    >
                      Reserve a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-sm collapse show">
            <div className="container">
              <div className="row align-items-center py-6">
                <div className="col-3 col-md-2 col-lg-1">
                  {/* Date */}
                  <time
                    className="d-block text-center text-body-emphasis"
                    dateTime="2024-09-29"
                  >
                    <span className="d-block mb-2 display-6 font-playfair">
                      29
                    </span>
                    <span>Sep</span>
                  </time>
                </div>
                <div className="col-9 col-md-7 col-lg-8">
                  <div
                    className="h4 mb-4 mb-md-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#eventThree"
                    aria-controls="eventThree"
                    role="button"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum voluptas, aut ea quae!
                  </div>
                </div>
                <div className="col-9 offset-3 col-md-3 offset-md-0 text-md-right">
                  {/* Button */}
                  <a
                    href="#section-reservation"
                    className="btn btn-outline-primary text-black text-primary-hover"
                  >
                    Reserve a table
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="event-lg collapse bg-cover" id="eventThree">
            <div className="bg-black bg-opacity-50">
              <div className="container">
                <div className="row py-10">
                  <div className="col-md-8 col-lg-5">
                    {/* Date */}
                    <h3 className="text-xs text-primary">
                      <time dateTime="2024-09-29">September 29, 2024</time>
                    </h3>
                    {/* Heading */}
                    <h2 className="mb-3 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum voluptas, aut ea quae!
                    </h2>
                    {/* Description */}
                    <p className="mb-6 text-white text-opacity-75">
                      Alias earum, labore doloremque iusto a modi et, dolorem
                      veritatis iste quis ab. Facere est optio, voluptate
                      molestias aspernatur impedit perferendis odit?
                    </p>
                    {/* Button */}
                    <a
                      href="#"
                      className="btn btn-outline-primary text-white text-primary-hover"
                    >
                      Reserve a table
                    </a>
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

export default Events;
