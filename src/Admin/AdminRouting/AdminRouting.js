import React, { Component } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import * as Constants from "../../Constants"
import AdminMainPage from '../AdminMainPage/AdminMainPage';
import "../AdminRouting/AdminRouting.css";
import AdminDatastore from '../AdminDatastore/AdminDatastore';
export class AdminRouting extends Component {
    render() {
        return (
            <div>
            <Router>
            <Switch>
            <Route path={Constants.ADMIN_ROUTING_LINK} component={AdminRouting} exact>
                <Redirect to={Constants.ADMIN_MAIN_PAGE_LINK}/> 
            </Route> 
            <Route path={Constants.ADMIN_DATASTORE_LINK} component={AdminDatastore} />
            <Route path={Constants.ADMIN_MAIN_PAGE_LINK}  component={AdminMainPage} />
            </Switch>
            
     <div className="admin_footer">
         © 2021 All Rights Reserved, ShareMyMeal welfare Project®
     </div>
        </Router>
            </div>
        )
    }
}

export default AdminRouting
