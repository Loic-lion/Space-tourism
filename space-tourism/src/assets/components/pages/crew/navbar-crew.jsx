import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCrew({ crew }) {
  return (
    <>
      <nav className="navbar__desktop">
        <ul>
          {crew.map((crewName, index) => (
            <li key={index}>
              <Link to={crewName.name}>O</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
