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
import  {GiHamburgerMenu}  from "react-icons/gi";
import image from "../../testLogo.JPEG";



export class Navbarr extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalOpen:false,
            isJoinUsModalOpen:false,
            isHamburgerClicked:false,
            donaterFirstName:"",
            donaterLastName:"",
            donaterMobileNumber:"",
            donaterAddress:"",
            donaterCity:"",
            donaterMealQuantity:"",
            donaterArray:{
              donaterFirstName:this.donaterFirstName,
              donaterLastname:this.donaterLastName,
              donaterMobileNumbere:this.donaterMobileNumber,
              donaterAddress:this.donaterAddress,
              donaterCity:this.donaterCity,
              donaterMealQuantity:this.donaterMealQuantity
            }
 

        };

        this.handleDonaterRequest = this.handleDonaterRequest.bind(this)
        this.handleChange = this.handleChange.bind(this)
    
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


    handleHamburgerClick = () => {
      this.setState({
        isHamburgerClicked:!this.state.isHamburgerClicked,
      })
    }

    handleChange = ({ target }) =>{
      this.setState({
        [target.name]: target.value
      });
    }


    handleDonaterRequest = (e) => {
      e.preventDefault();

      // const donaterArray = [this.state.donaterFirstName , this.state.donaterLastName ,this.state.donaterMobileNumber,
      //                   this.state.donaterAddress, this.state.donaterCity,this.state.donaterMealQuantity]


                        
      this.setState({
        isLoginModalOpen:false,
    }) 


    const donaterArray = {
      donaterFirstName:this.state.donaterFirstName,
      donaterLastName:this.state.donaterLastName,
      donaterMobileNumber:this.state.donaterMobileNumber,
      donaterAddress:this.state.donaterAddress,
      donaterCity:this.state.donaterCity,
      donaterMealQuantity:this.state.donaterMealQuantity
    }

    fetch("http://localhost:8080/admin/donationRequest" , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(donaterArray)
    }).then(()=> {
      console.log("Donater Request Added ( successfully )")
    })
      console.log(this.state.donaterMobileNumber);
    }



    render() {
        return (<>


            <div className="navbar_main_container">

                <span className="navbar_logo" >       
                 <img src={image} alt="some example image" className="logo" />
                </span>
                <GiHamburgerMenu className="navbar_hamburger_icon" size="30" onClick={this.handleHamburgerClick} />
              <div className={this.state.isHamburgerClicked ? "navbar_links active" : "navbar_links" }>
                  <ul>   
                  <NavLink to={Constants.HOME_LINK} className="navLink" style={{ textDecoration: 'none' }} onClick={this.handleHamburgerClick} > <li>      
                      <span className= "navbar_home navbar_text" > Home</span>
                    </li></NavLink>

                    <NavLink  to={Constants.ABOUT_US_LINK} style={{ textDecoration: 'none' }} onClick={this.handleHamburgerClick} ><li>
                      <span  className="navbar_about_us navbar_text">
                      About us</span>
                    </li> </NavLink>

                    <li onClick={() =>{this.handleJoinUsModalOpen(); this.handleHamburgerClick()}}>
                      <span className="navbar_join_us navbar_text" >Join us
                      </span>
                    </li>

                    <li onClick={() => {this.handleLoginModalOpen() ; this.handleHamburgerClick()}}>
                      <span  className="navbar_donate navbar_text">Donate
                      </span>
                    </li>

                  </ul>
              </div>

           
            </div>



            <div className="login_modal_container">
            <Dialog
        open={this.state.isLoginModalOpen}
        onClose={this.handleLoginModalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="donater_modal_title">
            Donate 
        </DialogTitle>
        <DialogContent>
              <div className="donater_modal_grid">


          <TextField  label="first name" name="donaterFirstName" value={this.state.donaterFirstName}  onChange={this.handleChange}/>
          <TextField  label="last name" name="donaterLastName" value={this.state.donaterLastName} onChange={this.handleChange}/>
          <TextField id="outlined-basic" label="mobile number" variant="outlined" name="donaterMobileNumber"  value={this.state.donaterMobileNumber} onChange={this.handleChange}/>
          <TextField id="outlined-basic" label="food pickup address" variant="outlined" name="donaterAddress" value={this.state.donaterAddress} onChange={this.handleChange}/>
          <TextField id="outlined-basic" label="city" variant="outlined" name="donaterCity" value={this.state.donaterCity} onChange={this.handleChange} />


          <FormControl sx={{ m: 1, minWidth: 120 }} className="">
        <InputLabel id="demo-simple-select-helper-label">meal quantity</InputLabel>
        <Select
        className=""
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="meal quantity"
          name="donaterMealQuantity"
          defaultValue = ""
          value={this.state.donaterMealQuantity}
          onChange={this.handleChange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        <FormHelperText>quantity of meal per person</FormHelperText>
      </FormControl>

            </div>

        </DialogContent>
        <DialogActions className="donater_modal_action_container">
        <span className="donate_modal_checkbox" > 
         <input type="checkbox" id="donate_modal_checkbox"/> 
         <label  htmlFor="donate_modal_checkbox" style={{cursor:"pointer" , paddingLeft:"5px"}}>I assure the quality of food is safe for consumption</label> </span>
          <Button variant="contained" className="donater_modal_submit_button" onClick={this.handleDonaterRequest} autoFocus>
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

          <TextField size="medium" id="outlined-basic" label="first name" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="last name" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="mobile number" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="Age" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="locality" variant="outlined" />
          <TextField size="medium"  id="outlined-basic" label="city" variant="outlined" />




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
