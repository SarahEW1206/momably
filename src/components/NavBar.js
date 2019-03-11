import React from "react";

export default function NavBar() {
  return (
    <nav className="main-nav navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <a className="navbar-brand" href="/">
          Navbar
        </a> */}
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            Art & Photography
          </a>
          <a className="nav-item nav-link" href="/">
            Clothing & Accessories
          </a>
          <a className="nav-item nav-link" href="/">
            Entertainment
          </a>
          <a className="nav-item nav-link" href="/">
            Hair & Beauty
          </a>
          <a className="nav-item nav-link" href="/">
            Health & Fitness
          </a>
          <a className="nav-item nav-link" href="/">
            Home & Living
          </a>
          <a className="nav-item nav-link" href="/">
            Kids & Baby
          </a>
          <a className="nav-item nav-link" href="/">
            Pets
          </a>
          <a className="nav-item nav-link" href="/">
            Professional Services
          </a>
        </div>
      </div>
    </nav>
  );
}
