import { useState } from "react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handlechange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <section className="vh-120" style={{ backgroundColor: "#eee" }}>
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
                      Sign up
                    </p>

                    <form method="post" className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={user.name}
                            onChange={handlechange}
                            // placeholder="Your Name"
                          />
                          <label className="form-label" htmlFor="name">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={user.email}
                            onChange={handlechange}
                            // placeholder="Your Email"
                          />
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={user.phone}
                            onChange={handlechange}
                            // placeholder="Your Phone Number"
                          />
                          <label className="form-label" htmlFor="phone">
                            Your Phone
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="work"
                            id="work"
                            className="form-control"
                            value={user.work}
                            onChange={handlechange}
                            // placeholder="Your Profession"
                          />
                          <label className="form-label" htmlFor="work">
                            Your Profession
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={user.password}
                            onChange={handlechange}
                            // placeholder="Your Password"
                          />
                          <label className="form-label" htmlFor="password">
                            Your Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            className="form-control"
                            value={user.cpassword}
                            onChange={handlechange}
                            // placeholder="Your Confirm Password"
                          />
                          <label className="form-label" htmlFor="cpassword">
                            Your Confirm Password
                          </label>
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3c"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          // name="signup"
                          id="signup"
                          // value="register"
                          className="btn btn-primary btn-lg"
                          onClick={PostData}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div style={{ textAlign: "center" }}>
                      <NavLink to={"/login"}>
                        {" "}
                        <span style={{ color: "red" }}>
                          I am Already Register
                        </span>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample_Photo"
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

export default Signup;
