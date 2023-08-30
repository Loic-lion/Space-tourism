import React from "react";
import { Link } from "react-router-dom";

export default function NavBarTechnology({ technology }) {
  return (
    <>
      <nav className="navbar__desktop">
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>
              <Link to={tech.name}>{tech.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
