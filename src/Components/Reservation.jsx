import React, { useState } from "react";
import "../styles/App.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    guests: "2",
    date: "2024-05-24",
    time: "18:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <section className="py-5 py-md-9 bg-light" id="reservation">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            {/* Heading */}
            <h2 className="mb-2 font-playfair">Make online reservation</h2>
            {/* Subheading */}
            <p className="text-gray mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              illo praesentium sequi in cum, beatae maiores quae qui.
            </p>
          </div>
        </div>
        <div className="row justify-content-lg-center">
          <div className="col-lg-8">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="row gx-3">
                <div className="col-md-6">
                  {/* FUll name */}
                  <div className="mb-3">
                    <label htmlFor="userName" className="visually-hidden">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      name="userName"
                      placeholder="Full name"
                      value={formData.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Phone number */}
                  <div className="mb-3">
                    <label htmlFor="userPhone" className="visually-hidden">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="userPhone"
                      name="userPhone"
                      placeholder="Phone number"
                      value={formData.userPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Email address */}
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      name="userEmail"
                      placeholder="Email address"
                      value={formData.userEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* guests */}
                  <div className="mb-3">
                    <label htmlFor="guests" className="visually-hidden">
                      Guests
                    </label>
                    <select
                      name="guests"
                      id="guests"
                      className="form-select"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 persons</option>
                      <option value="3">3 persons</option>
                      <option value="4">4 persons</option>
                      <option value="5">5 persons</option>
                    </select>
                  </div>
                  {/* date */}
                  <div className="mb-3">
                    <label htmlFor="date" className="visually-hidden">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* time */}
                  <div className="mb-3">
                    <label htmlFor="time" className="visually-hidden">
                      Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col text-center">
                  {/* button */}
                  <button
                    className="btn btn-outline-primary text-color text-primary-hover"
                    type="submit"
                  >
                    Reserve a table
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
