import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Constants from "./Constants";
import AboutUs from "./Donater/AboutUs/AboutUs"
import Navbar from "./Donater/Navbar/Navbar";
import HomePage from "./Donater/Home/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
      <div>
          <Switch>
            <Route path={Constants.ABOUT_US_LINK} exact component={AboutUs} />
            <Route path={Constants.HOME_LINK} exact component={HomePage} />
          </Switch>
          
          <div className="main_footer">        i am fruity footer
          </div>
      </div>
        </Router>
    </div>

      
  );
}

export default App;
