import React from "react";
import OnlyNav from "./onlyNav";
const Faculty = () => {
  return (
    <>
      <OnlyNav></OnlyNav>
      {/* <!-- About our Faculty and experts --> */}
      <section class="faculty">
        <div class="facultyContainer container mt-5 text-center">
          <h1>Our Amazing Faculty</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            dolor.
          </p>
          <div class="row mt-5 facultyRow">
            {/* <!-- first --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/01.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 1</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
            {/* <!-- second --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/02.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 2</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
            {/* <!-- Third --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/03.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 3</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
            {/* <!-- fourth --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/04.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 4</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
            {/* <!-- fifth --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/01.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 5</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
            {/* <!-- sixth --> */}
            <div class="col-xl-4 col-lg-4 facultyDiv col-md-6 col-sm-10 d-block m-auto">
              <figure class="figure">
                <img
                  src="./images/faculty/02.jpg"
                  class="facultyImages figure-img img-fluid rounded-circle"
                  height="500px"
                  width="200px"
                  alt="first"
                />
                <figcaption>
                  <h4> Faculty 6</h4>
                  <p>Short description</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Faculty ends --> */}
    </>
  );
};

export default Faculty;
