import CrewInfo from "./crew-info";
import CrewImg from "./crew-img";
import "../../../css/crew.css";
import NavBarCrew from "./navbar-crew";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Crew({ crew }) {
  function addBodyClass() {
    document.body.classList.add("crew");
    document.body.classList.remove("technology");
    document.body.classList.remove("home");
    document.body.classList.remove("destination");


  }
  addBodyClass();
  return (
    <>
      <h5>
        <span>02</span> Meet your crew
      </h5>
      <section className="container__crew">
        <section className="container__crew__info">
          <NavBarCrew crew={crew} />
          <Routes>
            <Route path="/*" element={<Navigate to="Douglas Hurley" />} />
            {crew.map((crewInfo, index) => (
              <Route
                key={index}
                path={crewInfo.name}
                element={<CrewInfo crewInfo={crewInfo} />}
              />
            ))}
          </Routes>
        </section>
        <hr />
        <Routes>
          <Route path="/*" element={<Navigate to="Douglas Hurley" />} />
          {crew.map((crewimage, index) => (
            <Route
              key={index}
              path={crewimage.name}
              element={<CrewImg crewimage={crewimage} />}
            />
          ))}
        </Routes>
      </section>
    </>
  );
}
