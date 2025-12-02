// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/images/Icon.svg"; // عدّل الاسم لو مختلف

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-white shadow-sm">
      <div className="container">
        {/* Logo + Title */}
        <a href="#" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="Nexcent logo" width="32" height="32" />
          <span className="fw-bold fs-4 text-dark">Nexcent</span>
        </a>

        {/* Toggler للموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links + Button */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-4 me-lg-4">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
          </ul>

          <a href="#" className="btn btn-nexcent px-4">
            Register Now →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
