import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarTechnology({ technology }) {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <nav className="container__technology__info__navigation__navbar">
        <ul>
          {technology.map((tech, index) => (
            <li
              key={index}
              onClick={() => handleLinkClick(index)}
              style={{
                backgroundColor:
                  activeLink === index
                    ? "rgba(255, 255, 255)"
                    : "rgba(255, 255, 255, 0.0)",
              }}
            >
              <Link
                to={tech.name}
                style={{
                  color: activeLink === index ? "black" : "rgba(255, 255, 255)",
                }}
              >
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
