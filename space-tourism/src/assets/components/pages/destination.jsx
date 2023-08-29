import NavBarDestination from "./navbar-destination";
import { Routes, Route, Navigate } from "react-router-dom";
import Planet from "./planet-info";

export default function Destination({ destination }) {
  return (
    <>
      <h2>01 Pick your destination</h2>
      <section>
        <img />
        <article>
          <NavBarDestination />
          <Routes>
            <Route path="/*" element={<Navigate to="moon" />} />
            <Route path="moon" element={<Planet />} />
            <Route path="mars" element={<Planet />} />
            <Route path="europa" element={<Planet />} />
            <Route path="titan" element={<Planet />} />
          </Routes>
        </article>
      </section>
    </>
  );
}
