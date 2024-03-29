import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "../Images/company.jpg";

const Navbar = () => {
  const user = sessionStorage.getItem("USER");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "100px", height: "40px" }}
            src={logo}
            alt="companyLogo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {user !== "LogIn" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Registration
                  </Link>
                </li>
              </>
            ) : null}

            {user === "LogIn" ? (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
