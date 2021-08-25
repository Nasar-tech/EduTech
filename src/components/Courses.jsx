import React from "react";
import OnlyNav from "./onlyNav";

const Courses = () => {
  return (
    <>
      <OnlyNav />
      <section class="container-fluid ourServices text-center">
        <div class="container">
          <h1>Our Courses</h1>
          <p>List of Services which we are provided</p>

          <div class="row rowSetting bg-light">
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <div class="imgSetting d-block m-auto">
                <i class="fab fa-angular fa-5x  imgSetting"></i>
              </div>
              <h2>Angular WebSite Designing</h2>
              <p>Angular with latest version and real time development</p>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <div class="imgSetting d-block m-auto">
                <i class="fab fa-react fa-5x  imgSetting "></i>
              </div>
              <h2>React WebSite Designing</h2>
              <p>React Websites Createing</p>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <div class="imgSetting d-block m-auto">
                <i class="fab fa-node-js fa-5x  imgSetting"></i>
              </div>
              <h2>Node WebSite Development</h2>
              <p>Websites backend development</p>
            </div>
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <div class="imgSetting d-block m-auto">
                <i class="fab fa-python fa-5x  imgSetting"></i>
              </div>
              <h2>Python Automation</h2>
              <p>Python Automation with realtime experts</p>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-outline-info">
              FindMore
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
