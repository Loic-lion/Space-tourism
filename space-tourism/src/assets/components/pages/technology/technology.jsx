import TechnologyInfo from "./technology-info";
import NavBarTechnology from "./navbar-technology";
import TechnologyImg from "./technology-image";
import { Route, Routes, Navigate } from "react-router-dom";

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
      <section>
        <h2>03 Space launch 101</h2>
        <div>
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
      </section>
      <section>
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
      </section>
    </>
  );
}
