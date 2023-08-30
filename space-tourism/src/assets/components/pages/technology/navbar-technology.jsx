import React from "react";
import { Link } from "react-router-dom";

export default function NavBarTechnology({ technology }) {
  let x =1;
  return (
    <>
      <nav className="navbar__desktop">
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>
              <Link to={tech.name}>{index + x}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
