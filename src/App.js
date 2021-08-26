import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Contactus from './components/Contactus';
import Workshops from "./components/WorkShops";
import Home from "./Home";



// Course Details Components
import JavaCourse from './components/CourseDetailsAPI/JavaCourse';
import Android from './components/CourseDetailsAPI/Android';
import Angular from './components/CourseDetailsAPI/Angular';
import Azure from './components/CourseDetailsAPI/Azure';
import CSharp from './components/CourseDetailsAPI/CSharp';
import JS from './components/CourseDetailsAPI/JS';
import Node from './components/CourseDetailsAPI/Node';
import Python from './components/CourseDetailsAPI/Python';
import ReactC from './components/CourseDetailsAPI/React';
import Selenium from './components/CourseDetailsAPI/Selenium';


import "./App.css";
import Career from './components/Career';
import Error from './components/Error';
function App() {

  return (
    <>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Courses" component={Courses}></Route>
        {/* Course Curriculams */}
        <Route exact path="/Java/CourseDetails" component={JavaCourse}></Route>
        <Route exact path="/Csharp/CourseDetails" component={CSharp}></Route>
        <Route exact path="/Selenium/CourseDetails" component={Selenium}></Route>
        <Route exact path="/Python/CourseDetails" component={Python}></Route>
        <Route exact path="/Node/CourseDetails" component={Node}></Route>
        <Route exact path="/React/CourseDetails" component={ReactC}></Route>
        <Route exact path="/JS/CourseDetails" component={JS}></Route>
        <Route exact path="/Angular/CourseDetails" component={Angular}></Route>
        <Route exact path="/Android/CourseDetails" component={Android}></Route>
        <Route exact path="/Azure/CourseDetails" component={Azure}></Route>
        {/* Course Curriculams ends */}
        <Route exact path="/Career" component={Career}></Route>
        <Route exact path="/Faculty" component={Faculty}></Route>
        <Route exact path="/Workshops" component={Workshops}></Route>
        <Route exact path="/Contactus" component={Contactus}></Route>










        <Route path="/*" component={Error}></Route>

      </Switch>
    </>
  )
}

export default App
