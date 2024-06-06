import React from "react";

const Contact = () => {
  return (
    <section className="py-5 py-md-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading  */}
            <h2 className="mb-2 font-playfair">Get in touch with us</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              illo praesentium sequi in cum, beatae maiores quae qui.
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-3 order-md-2">
            {/* Heading  */}
            <h4 className="mb-2 text-xs">Write us</h4>
            {/* Text  */}
            <p className="mb-4 font-playfair">
              <a className="text-primary" href="#">
                admin@domain.com
              </a>
            </p>
            {/* Heading  */}
            <h4 className="mb-2 text-xs">Call us</h4>
            {/* Text  */}
            <p className="mb-4 font-playfair">
              <a className="text-primary" href="tel:+19876543210">
                +1 987 654 3210
              </a>
            </p>
            {/* Heading  */}
            <h4 className="mb-2 text-xs">Visit us</h4>
            {/* Text  */}
            <p className="mb-4 font-playfair text-gray">
              1234 Altschul, New York, NY 10027-0000
            </p>
            {/* Heading  */}
            <h4 className="mb-2 text-xs">Social links</h4>
            {/* List  */}
            <div className="d-flex mb-6 mb-md-0 font-playfair">
              <a className="d-block me-3 text-primary" href="#">
                <svg
                  className="svg-inline--fa fa-twitter"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a className="d-block me-3 text-primary" href="#">
                <svg
                  className="svg-inline--fa fa-facebook-f"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  ></path>
                </svg>
              </a>
              <a className="d-block text-primary" href="#">
                <svg
                  className="svg-inline--fa fa-instagram"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-9 order-md-1">
            <form className="block-decoration block-decoration-2">
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="user_name" className="visually-hidden">
                  Full name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="form-control"
                  placeholder="Full name"
                  required
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="user_email" className="visually-hidden">
                  E-mail address
                </label>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  className="form-control"
                  placeholder="E-mail address"
                  required
                />
              </div>
              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="visually-hidden">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="9"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              {/* Button */}
              <button
                className="btn btn-outline-primary text-black text-primary-hover"
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
