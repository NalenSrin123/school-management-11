import React from "react";
import "../../assets/styles/PopularCurses.css"
import etec from "../../assets/images/etec_logo.jpg"
function Navbar() {
  return (
    <div className="navbar-wrapper">

      <div className="navbar">

        <div className="logo">
          <img src={etec} alt="logo" />
          <span className="logo-text">
            <span className="yellow">ETEC</span> CENTER
          </span>
        </div>

        <ul className="menu">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>INTERNSHIP</li>
          <li className="donate">DONATE</li>
          <li className="courses">OUR COURSES ▾</li>
          <li className="login">Login</li>
        </ul>

        <button className="enroll-btn">Enroll</button>

      </div>

      <div className="course-search">

        <p>COURSES : ALL</p>

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

      </div>

    </div>
  );
}

export default Navbar;