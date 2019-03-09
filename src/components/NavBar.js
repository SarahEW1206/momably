import React from "react";

export default function NavBar() {
  return (
    <nav class="main-nav navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">
            Art & Photography
          </a>
          <a class="nav-item nav-link" href="#">
            Clothing & Accessories
          </a>
          <a class="nav-item nav-link" href="#">
            Entertainment
          </a>
          <a class="nav-item nav-link" href="#">
            Hair & Beauty
          </a>
          <a class="nav-item nav-link" href="#">
            Health & Fitness
          </a>
          <a class="nav-item nav-link" href="#">
            Home & Living
          </a>
          <a class="nav-item nav-link" href="#">
            Kids & Baby
          </a>
          <a class="nav-item nav-link" href="#">
            Pets
          </a>
          <a class="nav-item nav-link" href="#">
            Professional Services
          </a>
        </div>
      </div>
    </nav>
  );
}
