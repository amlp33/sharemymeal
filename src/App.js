import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Constants from "./Constants";
import AboutUs from "./Donater/AboutUs/AboutUs"
import Navbar from "./Donater/Navbar/Navbar";
import HomePage from "./Donater/Home/HomePage";
import AdminMainPage from "./Admin/AdminMainPage/AdminMainPage";
import DonaterMainPage from "./Donater/DonaterMainPage/DonaterMainPage";
import AdminRouting from "./Admin/AdminRouting/AdminRouting";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
        <Router >
      <div>
          <Switch>
          <Route path={Constants.ADMIN_ROUTING_LINK}  component={AdminRouting} />
            <Route path={Constants.DONATER_MAIN_PAGE_LINK}   component={DonaterMainPage} />
            {/* <Route path={Constants.HOME_LINK} exact component={HomePage} /> */}
            {/* <Route path={Constants.ABOUT_US_LINK}  component={AboutUs} /> */}


          </Switch>
          
          {/* <div className="main_footer">        i am fruity footer
          </div> */}
      </div>
        </Router>
    </div>

      
  );
}

export default App;
