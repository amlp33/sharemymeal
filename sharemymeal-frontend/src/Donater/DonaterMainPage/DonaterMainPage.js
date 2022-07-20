import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Navbarr from '../Navbar/Navbar'
import * as Constants from "../../Constants";
import AboutUs from '../AboutUs/AboutUs'
import HomePage from '../Home/HomePage'
import ScrollToTop from '../../ScrollToTop';
import "../DonaterMainPage/DonaterMainPage.css"
export class DonaterMainPage extends Component {
    render() {
        return (
            <ScrollToTop>
            <Router >
                <Navbarr />
                    <Switch>
                    <Route path={Constants.DONATER_MAIN_PAGE_LINK}  exact > 
                      <Redirect to={Constants.HOME_LINK} />
                    </Route>
                    <Route path={Constants.HOME_LINK}  component={HomePage} />
                    <Route path={Constants.ABOUT_US_LINK}  component={AboutUs} />
                    </Switch>
                    <div className="donater_footer"> 
                    © 2021 All Rights Reserved, ShareMyMeal.in®
                    </div>
          </Router>
          </ScrollToTop>
        )
    }
}

export default DonaterMainPage
