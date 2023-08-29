import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/shared/logo.svg";
import Burger from "../../img/shared/icon-hamburger.svg";
import Close from "../../img/shared/icon-close.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo de l'entreprise Space Tourism" />
      <hr />
      <img src={Burger} alt="icone pour le menu burger" />
      <nav className="navbar__mobile">
        <img src={Close} alt="icone de fermeture pour le menu burger" />
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination/*">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew/*">
              <span>02 </span>Crew
            </Link>
          </li>
          <li>
            <Link to="/technology/*">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="navbar__desktop">
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination/*">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew/*">
              <span>02 </span>Crew
            </Link>
          </li>
          <li>
            <Link to="/technology/*">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
