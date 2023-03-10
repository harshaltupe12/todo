import React from "react";

export default function Navbar(props) {
  // NavBar Code Goes Here
  return (
    <div className="bg-dark text-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-light">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon text-light" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Your Title",
};
