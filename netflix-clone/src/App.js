import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import LandingPage from './Containers/LandingPage'
import SignIn from './Containers/SignIn'


function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/signin" component={SignIn}/>
    </Router>
  );
}

export default App;
