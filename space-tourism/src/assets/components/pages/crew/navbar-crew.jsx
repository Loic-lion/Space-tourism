import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarCrew({ crew }) {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <nav className="container__crew__info__navbar">
        <ul>
          {crew.map((crewName, index) => (
            <li key={index}>
              <Link to={crewName.name}>
                <div
                  onClick={() => handleLinkClick(index)}
                  style={{
                    backgroundColor:
                      activeLink === index
                        ? "rgba(255, 255, 255)"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                ></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
