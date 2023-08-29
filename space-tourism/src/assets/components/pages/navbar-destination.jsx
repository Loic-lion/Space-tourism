import React from "react";
import { Link } from "react-router-dom";

export default function NavBarDestination() {


  return (
    <>
      <nav className="navbar__desktop">
        <ul>
          <li>
            <Link to="moon">Moon</Link>
          </li>
          <li>
            <Link to="mars">Mars</Link>
          </li>
          <li>
            <Link to="europa">Europa</Link>
          </li>
          <li>
            <Link to="titan">Titan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
