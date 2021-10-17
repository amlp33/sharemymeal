import React, { Component } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Constants from "../../Constants"
import HomePage from '../../Donater/Home/HomePage';
import AdminMainPage from '../AdminMainPage/AdminMainPage';
import "../AdminRouting/AdminRouting.css";
export class AdminRouting extends Component {
    render() {
        return (
            <div>
                    <AdminNavbar />
        <Router>
      <div>
          <Switch>
            <Route path={Constants.ADMIN_MAIN_PAGE_LINK}  component={AdminMainPage} />
          </Switch>
          
          <div className="admin_footer">
          © 2021 All Rights Reserved, ShareMyMeal welfare Project®

 
          </div>
      </div>
        </Router>
            </div>
        )
    }
}

export default AdminRouting
