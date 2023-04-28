import React, { useState } from "react";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoleft from "../img/logoleft.png";
import logoright from "../img/logoright.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const scrollview = () => {
  //   window.scrollBy(0, 400);
  // };
  // const gallery = () => {
  //   window.scrollBy(0, 400);
  // };

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logoleft} alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                class="movingBrackets square-brackets"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                class="movingBrackets square-brackets"
                onClick={() =>
                  window.scrollTo({
                    top: 300,
                    behavior: "smooth",
                  })
                }
              >
                OVERVIEW
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                class="movingBrackets square-brackets"
                onClick={() =>
                  window.scrollTo({
                    top: 1700,
                    behavior: "smooth",
                  })
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                onClick={() =>
                  window.scrollTo({
                    top: 3000,
                    behavior: "smooth",
                  })
                }
                class="movingBrackets square-brackets"
              >
                LOCATION
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                onClick={() =>
                  window.scrollTo({
                    top: 2400,
                    behavior: "smooth",
                  })
                }
                class="movingBrackets square-brackets"
              >
                AMINITIES
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                class="movingBrackets square-brackets"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                onClick={() =>
                  window.scrollTo({
                    top: 4200,
                    behavior: "smooth",
                  })
                }
                class="movingBrackets square-brackets"
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  fontSize: "12px",
                }}
                to="/"
                class="movingBrackets square-brackets"
              >
                <FaPhoneAlt /> &nbsp; +918747074074
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <img src={logoright} alt="" />

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a
              style={{
                cursor: "pointer",
                color: "lightblue",
              }}
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
