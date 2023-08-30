import CrewInfo from "./crew-info";
import CrewImg from "./crew-img";
import NavBarCrew from "./navbar-crew";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Crew({ crew }) {
  return (
    <>
      <section>
        <h2>02 Meet your crew</h2>

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
      <section>
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

        <img />
      </section>
    </>
  );
}
