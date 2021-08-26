import React from "react";
import OnlyNav from "./onlyNav";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <OnlyNav />
      <section class="container-fluid ourServices text-center">
        <div class="container">
          <h2>Welcome To EduTech! How can we help you..</h2>
          <hr />
          <h3>
            <i>
              Our team trained at your company premises. Learn content tailored
              to match your organization specific needs. You set the date & time
              and we deliver it.
            </i>
          </h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr class="w-30 mt-5 mx-auto" />
          <h1> Our Premium Courses </h1>
          <hr class="w-30 mx-auto" />
          <div class="row rowSetting bg-light">
            <h4 align="left" class="m-4 p-4">
              <i>
                We have experienced faculty to train Freshers for improving
                their technology skills to day to day needs.
              </i>
            </h4>
            {/* Course 1 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <Link to="/Java/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-java fa-5x imgSetting"></i>
                </div>
                <h2>Java Full Stack</h2>
              </Link>
              <p>Java with latest version and real time development</p>
            </div>

            {/* Course 2 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <Link to="/Csharp/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <img
                    src="https://img.icons8.com/ios/120/000000/c-sharp-logo.png"
                    class="imgSetting"
                  />
                </div>
                <h2>C# (.NET) Full Stack</h2>
              </Link>
              <p>Java with latest version and real time development</p>
            </div>
            {/* Course 3 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block m-auto">
              <Link to="/Selenium/CourseDetails">
                <div class="imgSetting csharp d-block m-auto">
                  <img
                    src="https://img.icons8.com/ios/120/000000/selenium-test-automation.png"
                    class="imgSetting"
                  />
                </div>
                <h2>Selenium Testing</h2>
                <p>Selenium Testing with (Java), (C#) and Python</p>
              </Link>
            </div>
            {/* Course 4 (python) */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/Python/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-python fa-5x"></i>
                </div>
                <h2>Pyton Development</h2>
                <p>Create and working with real time API</p>
              </Link>
            </div>
            {/* Course 5 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/Node/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-node fa-5x"></i>
                </div>
                <h2>BackEnd Development</h2>
                <p>Create and working with real time API</p>
              </Link>
            </div>
            {/* Course 6 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/React/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-react fa-5x"></i>
                </div>
                <h2>ReactJS</h2>
                <p>Awesome frontend Development</p>
              </Link>
            </div>
            {/* Course 7 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/JS/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-js fa-5x"></i>
                </div>
                <h2>JavaScript</h2>
                <p>Web Development From Scratch to Master</p>
              </Link>
            </div>
            {/* Course 8 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/Angular/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-angular fa-5x"></i>
                </div>
                <h2>Angular JS (Latest) </h2>
                <p>Awesome frontend Framework Development</p>
              </Link>
            </div>
            {/* Course 9 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/Android/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-android fa-5x"></i>
                </div>
                <h2>Android Development </h2>
                <p>
                  {" "}
                  Android Development with Android Studio, Native Apps
                  Development with ReactNative{" "}
                </p>
              </Link>
            </div>
            {/* Course 10 */}
            <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 d-block mt-4 m-auto">
              <Link to="/Azure/CourseDetails">
                <div class="imgSetting d-block m-auto">
                  <i class="fab fa-windows fa-5x"></i>
                </div>
                <h2>Microsoft Azure </h2>
                <p>Microsoft Azure Development</p>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Courses;
