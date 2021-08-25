import React from "react";

import OnlyNav from "./onlyNav";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="bgimg img-fluid">
          {/* <!-- NavBar Start --> */}
          <OnlyNav></OnlyNav>
          {/* <!-- Navbar End --> */}
          <div className="container mb-5 text-center headerset">
            <br />
            <h2 className="customFont">IT's NICE TO MEETYOU</h2>
            <h1 className="customFont">Welcome to our Edu-Tech</h1>
            <button className="btn btn-warning btn-outline-info text-white btn-lg">
              ContactUs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
