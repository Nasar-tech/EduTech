import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Courses from './components/Courses';
import Placements from './components/Placements';
import Faculty from './components/Faculty';
import Contactus from './components/Contactus';
import OnlyNav from './components/onlyNav';
import Workshops from "./components/WorkShops";
import Jobs from "./components/Jobs";

import Home from "./Home";
import "./App.css";
import Career from './components/Career';
import Projects from './components/Projects';
import Error from './components/Error';
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
        <Route path="/*" component={Error}></Route>

      </Switch>
    </>
  )
}

export default App
