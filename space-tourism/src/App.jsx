import "./App.css";
import Header from "./assets/components/header/header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/pages/home";
import Destination from "./assets/components/pages/destination/destination";
import Crew from "./assets/components/pages/crew/crew";
import Technology from "./assets/components/pages/technology/technology";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Destination/*"
              element={<Destination destinations={data.destinations} />}
            />
            <Route path="/Crew/*" element={<Crew crew={data.crew} />} />
            <Route
              path="/Technology/*"
              element={<Technology technology={data.technology} />}
            />
          </Routes>
        </main>
      </Router>
    </>
  );
}
