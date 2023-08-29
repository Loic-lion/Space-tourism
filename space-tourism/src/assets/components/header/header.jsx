import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02 </span>Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
