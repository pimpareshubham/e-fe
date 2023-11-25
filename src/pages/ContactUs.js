import React from 'react';
import myImage1 from '../img/cu.jpg';

const ContactUs = () => {
  return (
    <>



      <div className="text-center ch">
        <h1>Contact Us</h1>
      </div>

      <div className="container-fluid login-container">
        <div className="row lgc">
          <div className="col-md-auto">
            <div className="card">
              <img className="cuimg" src={myImage1} alt="contactus"/>
            </div>
          </div>

          <div className="col-md-auto">
            <div className="card d-block">
              <div className="card-body">
                <form action="">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control lgup"
                      type="text"
                      id="name"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control lgup"
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Any Message"
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-outline-success header-login-btn l-b navbar-text"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ContactUs;
