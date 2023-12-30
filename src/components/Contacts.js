import React from "react";

function Contacts() {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "80%",
        margin: "auto",
        padding: "25px",
      }}
    >
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required="true"
                      placeholder="Name"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required="true"
                      placeholder="Type Your Email"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="number"
                      id="number"
                      name="number"
                      className="form-control"
                      placeholder="Phone Number"
                      required="true"
                    />
                    <label for="phone" className="">
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="3"
                      className="form-control md-textarea"
                      placeholder="Pls Type Your Msg"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div
              style={{
                // border: "1px solid red",
                display: "flex",
                marginTop: "15px",
              }}
              className="text-center text-md-left"
            >
              <button
                type="submit"
                name="submit"
                id="submit"
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>India</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>9876543210</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
