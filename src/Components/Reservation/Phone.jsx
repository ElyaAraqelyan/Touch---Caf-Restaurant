import React from "react";

const Phone = () => {
  return (
    <section className="py-5 py-md-9" id="phone">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="block-decoration block-decoration-1 py-3">
              {/* Text */}
              <p className="mb-2 text-xs text-center text-gray">or call us:</p>
              {/* Phone */}
              <a
                href="tel:+19876543210"
                className="display-6 font-playfair text-decoration-none text-body-emphasis"
              >
                +1 987 654 3210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phone;
