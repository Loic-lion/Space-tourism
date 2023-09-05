import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/shared/logo.svg";
import Burger from "../../img/shared/icon-hamburger.svg";
import Close from "../../img/shared/icon-close.svg";
import "../../css/header.css";

export default function Header() {
  const [menuBurgerOpen, setMenuBurgerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  function handleMenuClick() {
    setMenuBurgerOpen(!menuBurgerOpen);
  }

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header>
      <img
        className="logo"
        src={Logo}
        alt="Logo de l'entreprise Space Tourism"
      />

      <img
        className="menu__burger"
        onClick={handleMenuClick}
        src={Burger}
        alt="icone pour le menu burger"
      />
      <nav className={`navbar__mobile ${menuBurgerOpen ? "open" : ""}`}>
        <img
          className="navbar__mobile__close"
          src={Close}
          onClick={handleMenuClick}
          alt="icone de fermeture pour le menu burger"
        />
        <ul>
          <li>
            <Link
              to="/"
          
            >
              <span>00 </span> HOME
            </Link>
          </li>
          <li>
            <Link
              to="/destination/*"
    
            >
              <span>01 </span> DESTINATION
            </Link>
          </li>
          <li>
            <Link
              to="/crew/*"

            >
              <span>02 </span> CREW
            </Link>
          </li>
          <li>
            <Link
              to="/technology/*"
 
            >
              <span>03 </span> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar__desktop">
        <hr />

        <nav className="navbar__desktop__menu">
          <ul>
            <li>
              <Link
                to="/"
                className={activeLink === 0 ? "active" : ""}
                onClick={() => handleLinkClick(0)}
              >
                <span>00</span> Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination/*"
                className={activeLink === 1 ? "active" : ""}
                onClick={() => handleLinkClick(1)}
              >
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew/*"
                className={activeLink === 2 ? "active" : ""}
                onClick={() => handleLinkClick(2)}
              >
                <span>02 </span>Crew
              </Link>
            </li>
            <li>
              <Link
                to="/technology/*"
                className={activeLink === 3 ? "active" : ""}
                onClick={() => handleLinkClick(3)}
              >
                <span>03 </span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
