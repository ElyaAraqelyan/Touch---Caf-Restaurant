import React from "react";

const Quote = () => {
  return (
    <section className="py-5 py-md-9 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {/* Icon */}
            <span className="display-1 font-playfair text-primary">”</span>
            {/* Blockquote */}
            <figure className="mb-0">
              <blockquote className="blockquote mb-0">
                <p className="font-playfair text-body-emphasis mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  at veritatis vitae modi ex quis quibusdam error repudiandae
                  adipisci dolore perspiciatis iste, vel fuga a, libero
                  architecto ratione deleniti sequi.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer text-xs mb-0">
                Liam Smith
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
