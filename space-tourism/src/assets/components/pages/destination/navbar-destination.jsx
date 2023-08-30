import React from "react";
import { Link } from "react-router-dom";

export default function NavBarDestination({ planet }) {
  return (
    <>
      <nav className="navbar__desktop">
        <ul>
          {planet.map((destination, index) => (
            <li key={index}>
              <Link  to={destination.name}>
                {destination.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
