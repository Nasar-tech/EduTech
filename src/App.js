import React from 'react';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Placements from './components/Placements';
import Faculty from './components/Faculty';
import Contactus from './components/Contactus';
import {Route,Switch} from 'react-router-dom';
import OnlyNav from './components/onlyNav';
import Workshops from "./components/WorkShops";
import Jobs from "./components/Jobs";

import Home from "./Home";
import "./App.css";
import Career from './components/Career';
import Projects from './components/Projects';
function App() {
  
  return (
    <>
    
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Courses" component={Courses}></Route>
        <Route exact path="/Career" component={Career}></Route>
        <Route exact path="/Faculty" component={Faculty}></Route>
        <Route exact path="/Workshops" component={Workshops}></Route>
        <Route exact path="/Contactus" component={Contactus}></Route>
        

      </Switch>
    </>
  )
}

export default App
