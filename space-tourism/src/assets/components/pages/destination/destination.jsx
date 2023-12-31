import NavBarDestination from "./navbar-destination";
import { Routes, Route, Navigate } from "react-router-dom";
import Planet from "./planet-info";
import "../../../css/destination.css";
import DestinationImg from "./destination-img";

export default function Destination({ destinations }) {
  function addBodyClass() {
    document.body.classList.add("destination");
    document.body.classList.remove("technology");
    document.body.classList.remove("crew");
    document.body.classList.remove("home");
  }
  addBodyClass();

  return (
    <>
      <section className="cont">
        <section className="cont__destination">
          <h5>
            <span>01</span> Pick your destination
          </h5>
          <div className="cont__destination__navigation">
            <Routes>
              <Route path="/*" element={<Navigate to="moon" />} />
              {destinations.map((destinationsImage, index) => (
                <Route
                  key={index}
                  path={destinationsImage.name}
                  element={<DestinationImg info={destinationsImage} />}
                />
              ))}
            </Routes>
          </div>
        </section>
        <article>
          <NavBarDestination planet={destinations} />
          <Routes>
            <Route path="/*" element={<Navigate to="moon" />} />
            {destinations.map((destination, index) => (
              <Route
                key={index}
                path={destination.name}
                element={<Planet info={destination} />}
              />
            ))}
          </Routes>
        </article>
      </section>
    </>
  );
}
