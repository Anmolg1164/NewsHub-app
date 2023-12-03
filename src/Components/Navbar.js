import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {" "}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">
            NewsHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <b>Home</b>
                </Link>
              </li>

              <li className="nav-item  ">
                <Link className="nav-link text-danger mx-auto" to="/business">
                  <b>Business</b>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link  text-success mx-auto"
                  to="/entertainment"
                >
                  <b>Entertainment</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-warning mx-auto" to="/general">
                  <b>General</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-info mx-auto" to="/health">
                  <b>Health</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-white mx-auto" to="/science">
                  <b>Science</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link text-danger mx-auto" to="/sports">
                  <b>Sports</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  className="nav-link text-primary mx-auto"
                  to="/technology"
                >
                  <b>Technology</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
