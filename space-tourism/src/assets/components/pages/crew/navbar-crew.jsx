import React from "react";
import { Link } from "react-router-dom";

export default function NavBarCrew({ crew }) {
  return (
    <>
      <nav className="container__crew__info__navbar">
        <ul>
          {crew.map((crewName, index) => (
            <li key={index}>
              <Link to={crewName.name}><div></div></Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
