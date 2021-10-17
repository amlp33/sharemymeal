import React, { Component } from 'react'
import "../Navbar/Navbar.css"
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Constants from "../../Constants"
// import {Navbar, Nav, NavDropdown , Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

export class Navbarr extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen:false,
            isJoinUsModalOpen:false,
        //   isNavbarHomeActive: true,
        //   isNavBarAboutUsActive:false,
        //   isNavBarJoinUsActive:false,
        //   isNavBarLoginActive:false,




        };
    
    }

    handleLoginModalOpen = () =>{
        this.setState({
            isLoginModalOpen:true,
        })
    }


    handleLoginModalClose = () =>{
        this.setState({
            isLoginModalOpen:false,
        })
    }



    handleJoinUsModalOpen = () =>{
        this.setState({
            isJoinUsModalOpen:true,
        })
    }


    handleJoinUsModalClose= () =>{
        this.setState({
            isJoinUsModalOpen:false,
        })
    }
    // handleNavbarLink(a , b ,c ,d ) {
    //     this.setState({ isNavbarHomeActive: a ,
    //                     isNavBarAboutUsActive:b,
    //                     isNavBarJoinUsActive:c,
    //                     isNavBarLoginActive:d 
    //                 },
    //                 console.log(this.state.isNavBarAboutUsActive)
    //                 );

    //   }
    
    




    render() {
        return (<>


            <div className="navbar_main_container">
            <span className="navbar_logo" >Logo</span>
            <NavLink to={Constants.HOME_LINK} >
            <span className= "navbar_home navbar_text"> Home</span>
            </NavLink>

            <NavLink  to={Constants.ABOUT_US_LINK}> <span  className="navbar_about_us navbar_text">
            About us</span></NavLink>
  
            <span className="navbar_join_us navbar_text" onClick={this.handleJoinUsModalOpen}>Join us</span>
            <span onClick={this.handleLoginModalOpen} className="navbar_donate navbar_text">Donate</span>
            </div>



            <div className="login_modal_container">
            <Dialog
        open={this.state.isLoginModalOpen}
        onClose={this.handleLoginModalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="login_modal_title">
            Donate 
        </DialogTitle>
        <DialogContent>
              <div className="login_modal_grid">
          <TextField  label="full name" />
          <TextField id="outlined-basic" label="mobile number" variant="outlined" />
          <TextField id="outlined-basic" label="food pickup address" variant="outlined" />
          <TextField id="outlined-basic" label="city" variant="outlined" />


          <FormControl sx={{ m: 1, minWidth: 120 }} className="">
        <InputLabel id="demo-simple-select-helper-label">meal quantity</InputLabel>
        <Select
        className=""
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="meal quantity"
        >
          
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <FormHelperText>quantity of meal per person</FormHelperText>
      </FormControl>

            </div>

        </DialogContent>
        <DialogActions className="login_modal_action_container">
        <span className="donate_modal_checkbox" > 
         <input type="checkbox" id="donate_modal_checkbox"/> 
         <label  htmlFor="donate_modal_checkbox" style={{cursor:"pointer" , paddingLeft:"5px"}}>I assure the quality of food is safe for consumption</label> </span>
          <Button variant="contained" className="login_modal_submit_button" onClick={this.handleLoginModalClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      </div>





    <div>
      <Dialog  className="join_us_modal_main_container" open={this.state.isJoinUsModalOpen} onClose={this.handleJoinUsModalClose}>
        <DialogTitle className="join_us_modal_title">Join Us</DialogTitle>
          <DialogContentText className="join_us_modal_text">
            Join us and be a part of  our family  in fighting hunger 
          </DialogContentText>
          <DialogContent className="join_us_grid">

          <TextField size="medium" id="outlined-basic" label="name" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="mobile number" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="Age" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="locality" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="city" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="why you want to join us" variant="outlined" />



        </DialogContent>
        <DialogActions>
          <Button variant="contained" className="join_us_submit_button" onClick={this.handleJoinUsModalClose}>Submit</Button>
        </DialogActions>
      </Dialog>

      </div>




            </>
        )
    }
}

export default Navbarr;
