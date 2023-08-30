import NavBarDestination from "./navbar-destination";
import { Routes, Route, Navigate } from "react-router-dom";
import Planet from "./planet-info";

export default function Destination({ destinations }) {
  return (
    <>
      <section>
        <h2>01 Pick your destination</h2>

        <NavBarDestination planet={destinations}/>
      </section>
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
      
    </>
  );
}
