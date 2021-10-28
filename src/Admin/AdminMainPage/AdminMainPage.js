import React, { Component } from 'react'
import "../AdminMainPage/AdminMainPage.css"
import AdminNavbar from '../AdminNavbar/AdminNavbar';

export class AdminMainPage extends Component {
    render() {
        return (
            <>
            <AdminNavbar />
            <div className="admin_main_page_main_container">
                <div className="admin_main_page_sub_container">
                This is the main page

                </div>
            </div>
            </>
        )
    }
}

export default AdminMainPage
