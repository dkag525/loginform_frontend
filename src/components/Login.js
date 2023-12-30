import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ borderRadius: "25px", marginTop: "25px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Log In
                    </p>

                    <form className="mx-1 mx-md-4">
                      {/* .............. */}

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            // placeholder="Your Email"
                          />
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                        </div>
                      </div>

                      {/* ........... */}

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            // placeholder="Your Password"
                          />
                          <label className="form-label" htmlFor="password">
                            Your Password
                          </label>
                        </div>
                      </div>
                      {/* ........... */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          name="signin"
                          id="signin"
                          value="login"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    {/* ........ */}

                    <div style={{ textAlign: "center" }}>
                      <NavLink to={"/login"}>
                        {" "}
                        <span style={{ color: "red" }}>I am New User</span>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
