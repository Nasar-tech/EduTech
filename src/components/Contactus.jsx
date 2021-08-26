import React from "react";
import OnlyNav from "./onlyNav";
const Contactus = () => {
  return (
    <>
      <OnlyNav></OnlyNav>
      {/* <!-- Contact us start --> */}
      <div class="container mt-5">
        <br></br>
        <div class="container mt-4">
          <h3 class="text-center">Contact Us</h3>
          {/* <hr class="w-25 mx-auto" /> */}
        </div>
        <div class="row contactUs">
          <div class="col-8 mx-auto bg-light">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Enter youre Name :
                </label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Enter youre Email :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="mobile" class="form-label">
                  Enter youre Mobile Number :
                </label>
                <input type="number" class="form-control" id="mobile" />
              </div>

              <button type="submit" class="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Contact us ends --> */}
    </>
  );
};

export default Contactus;
