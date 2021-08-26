import React from "react";
import { Link } from "react-router-dom";

const Placements = () => {
  return (
    <>
      <section class="placements">
        <div class="container text-center">
          <h2>Our Placements</h2>
          <p>Excellence in placements and training</p>
          <div class="row placementsRow g-5 gy-3">
            {/* <!-- First card --> */}
            <div class="col-sm-10 cardSet col-md-6 col-lg-4 col-xl-4 col-10 d-block m-auto">
              <div class="card">
                <img
                  src="./images/placements/01.jpg"
                  class="card-img-top mx-auto cardImage img-fluid"
                  alt="first"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Second Card --> */}
            <div class="col-sm-10 cardSet col-md-6 col-lg-4 col-xl-4 col-10 d-block m-auto">
              <div class="card">
                <img
                  src="./images/placements/02.jpg"
                  class="card-img-top mx-auto cardImage img-fluid"
                  alt="second"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Third Card --> */}
            <div class="col-sm-10 cardSet col-md-6 col-lg-4 col-xl-4 col-10 d-block m-auto">
              <div class="card">
                <img
                  src="./images/placements/03.jpg"
                  class="card-img-top mx-auto cardImage img-fluid"
                  alt="second"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <br></br>

            {/* <!-- Fourth Card --> */}
            <div class="col-sm-10 cardSet col-md-6 col-lg-4 col-xl-4 col-10 d-block m-auto">
              <div class="card">
                <img
                  src="./images/placements/04.jpg"
                  class="card-img-top mx-auto cardImage img-fluid"
                  alt="fourth"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Fifth Card --> */}
            <div class="col-sm-10 cardSet col-md-6 col-lg-4 col-xl-4 col-10 d-block m-auto">
              <div class="card">
                <img
                  src="./images/placements/03.jpg"
                  class="card-img-top mx-auto cardImage img-fluid"
                  alt="fourth"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center m-5">
          <h3>
            <Link to="/Contactus">
              <hr className="w-25 mx-auto" />
              Find More and Join with us{" "}
              <i className="far fa-arrow-circle-right m-auto"></i>
              <hr className="w-25 mx-auto" />
            </Link>
          </h3>
        </div>
      </section>
      <div></div>

      <div>
        <hr class="w-75 mx-auto" />
      </div>
    </>
  );
};

export default Placements;
