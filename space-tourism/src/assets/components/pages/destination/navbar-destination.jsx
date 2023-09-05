import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarDestination({ planet }) {
  const [activeLink, setActiveLink] = useState(0); // Initialisation avec l'index du premier lien

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <nav className="cont__destination__navigation__bar">
        <ul>
          {planet.map((destination, index) => (
            <li key={index}>
              <Link
                to={destination.name}
                onClick={() => handleLinkClick(index)}
                style={{
                  color: activeLink === index ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0.5)", // Change the color as needed
                }}
              >
                {destination.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
