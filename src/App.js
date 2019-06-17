import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import LandingPage from './Containers/LandingPage'
import SignIn from './Containers/SignIn'
import MainPage from './Containers/MainPage/component';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/main" component={MainPage}/>
    </Router>
  );
}

export default App;
