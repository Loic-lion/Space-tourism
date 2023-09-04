import TechnologyInfo from "./technology-info";
import NavBarTechnology from "./navbar-technology";
import TechnologyImg from "./technology-image";
import { Route, Routes, Navigate } from "react-router-dom";
import "../../../css/technology.css";

export default function Technology({ technology }) {
  function addBodyClass() {
    document.body.classList.add("technology");
    document.body.classList.remove("crew");
    document.body.classList.remove("home");
    document.body.classList.remove("destination");
  }
  addBodyClass();
  return (
    <>
      <section className="container__technology">
        <h5>
          <span>03</span> Space launch 101
        </h5>
        <div className="container__technology__info">
          <Routes>
            <Route path="/*" element={<Navigate to="Launch vehicle" />} />
            {technology.map((tech, index) => (
              <Route
                key={index}
                path={tech.name}
                element={<TechnologyImg techImage={tech} />}
              />
            ))}
          </Routes>
          <div className="container__technology__info__navigation">
            <NavBarTechnology technology={technology} />

            <Routes>
              <Route path="/*" element={<Navigate to="Launch vehicle" />} />
              {technology.map((tech, index) => (
                <Route
                  key={index}
                  path={tech.name}
                  element={<TechnologyInfo technology={tech} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
}
