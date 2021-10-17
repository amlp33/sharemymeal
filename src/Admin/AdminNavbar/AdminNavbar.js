import React, { Component } from 'react'
import "../AdminNavbar/AdminNavbar.css";
import { NavLink }from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export class AdminNavbar extends Component {
  constructor(props){
      super(props);
          this.state = {
              isAdminLoginModalOpen:false,
              isAdminSignupModalOpen:false,

          };
      }
  


      handleAdminLoginModalOpen = () => {
          this.setState({
              isAdminLoginModalOpen:true,
          })
      }

      handleAdminLoginModalClose = () => {
        this.setState({
            isAdminLoginModalOpen:false,
        })
    }

    handleAdminSignupModalOpen = () => {
        this.setState({
            isAdminSignupModalOpen:true,
        })
    }

    handleAdminSignupModalClose = () => {
      this.setState({
        isAdminSignupModalOpen:false,
      })
  }



    render() {
        return (
            <div className="a_navbar">
                <span className="a_navbar_logo a_navbar_text">(sharemymeal)Admin</span>
                <span className="a_navbar_text">Home</span>
                <span className="a_navbar_text" onClick={this.handleAdminLoginModalOpen}>Login/Signup</span>



                {/*  Login Signup  Modals  */}



                <Dialog className="a_login_modal_main_container"
                    open={this.state.isAdminLoginModalOpen}
                    onClose={this.handleAdminLoginModalClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                     >
                    <DialogTitle id="alert-dialog-title">
                    Login 
                    </DialogTitle>
                    <DialogContent className="a_login_modal_content">
                    <TextField id="outlined-basic" label="phone number" variant="outlined" />
                    <TextField id="outlined-basic" label="password" variant="outlined" />
                    </DialogContent>
                    <DialogActions className="a_login_modal_action_container">
                    <span className="a_login_modal_forgot_password"><span style={{cursor:"pointer"}}>Forgot password</span></span>
                    <Button variant="contained" style={{width:"100%" , backgroundColor:"#673fac" , color:"white"}} onClick={this.handleAdminLoginModalClose}>Sign in</Button>
                    <span className="a_login_modal_sign_up"><span onClick={() => { this.handleAdminLoginModalClose(); this.handleAdminSignupModalOpen() }} style={{cursor:"pointer"}} >Don't have a account , sign up</span></span>
                    </DialogActions>
                </Dialog>


                {/* Sign Up Modal  */}


                <Dialog
                    open={this.state.isAdminSignupModalOpen}
                    onClose={this.handleAdminSignupModalClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    Sign up
                    </DialogTitle>
                    <DialogContent className="a_signup_modal_content_container">
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="email" variant="outlined" />
                    <TextField id="outlined-basic" label="phone number" variant="outlined" />
                    <TextField id="outlined-basic" label="city" variant="outlined" />
                    <TextField id="outlined-basic" label="locality" variant="outlined" />

                    </DialogContent>
                    <DialogActions className="a_signup_modal_action_container">
                    <Button variant="contained" style={{width:"100%" , backgroundColor:"#673fac" , color:"white"}} onClick={this.handleAdminSignupModalClose}>Sign up</Button>
                    <span className="a_signup_modal_login_text"> <span onClick={() => {this.handleAdminSignupModalClose(); this.handleAdminLoginModalOpen()}} style={{cursor:"pointer"}}>Have a account , Login</span></span>
                    </DialogActions>
                </Dialog>
            


            </div>
        )
    }
}

export default AdminNavbar
