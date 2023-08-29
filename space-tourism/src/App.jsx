import "./App.css";
import Header from "./assets/components/header/header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/components/pages/home";
import Destination from "./assets/components/pages/destination";
import Crew from "./assets/components/pages/crew";
import Technology from "./assets/components/pages/technology";

export default function App() {
  
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination/*" element={<Destination />} />
            <Route path="/Crew/*" element={<Crew />} />
            <Route path="/Technology/*" element={<Technology />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
