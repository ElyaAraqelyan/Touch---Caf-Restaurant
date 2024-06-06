import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-7 py-md-9 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Newsletter</h2>
            {/* Subheading */}
            <p className="mb-6 text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              illo praesentium sequi in cum, beatae maiores quae qui.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us6.list-manage.com/subscribe/post?u=c7b7808bb5a16b9f09c4e1fe0&amp;id=96b8442f9a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate=""
              >
                <div
                  className="row justify-content-center gx-3"
                  id="mc_embed_signup_scroll"
                >
                  <div className="col">
                    <label className="visually-hidden" htmlFor="mce-EMAIL">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div className="visually-hidden" id="mce-responses">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_c7b7808bb5a16b9f09c4e1fe0_96b8442f9a"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      className="btn btn-outline-primary text-black text-primary-hover"
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
