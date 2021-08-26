import React from "react";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Placements from "./components/Placements";
import Faculty from "./components/Faculty";
import Contactus from "./components/Contactus";
import UpComing from "./components/UpComing";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

import "./App.css";
function Home() {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Courses />
      <UpComing />
      <Placements />
      {/* <Faculty /> */}
      <Contactus />
      <Footer></Footer>
    </>
  );
}

export default Home;
