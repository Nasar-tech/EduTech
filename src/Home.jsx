import React from "react";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Placements from "./components/Placements";
import Faculty from "./components/Faculty";
import Contactus from "./components/Contactus";

import "./App.css";
function Home() {
  return (
    <>
      <Navbar />
      <Courses />
      <Placements />
      <Faculty />
      <Contactus />
    </>
  );
}

export default Home;
