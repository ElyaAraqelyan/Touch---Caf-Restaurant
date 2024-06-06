import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="min-vh-100 py-5 py-md-9 bg-gradient-bottom-end-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              {/* Divider */}
              <hr className="hr-sm text-primary" />
              {/* Text */}
              <p className="fs-lg lh-lg text-black mb-0">
                Enjoy our specialty coffees and award winning doughnuts in a
                friendly atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
