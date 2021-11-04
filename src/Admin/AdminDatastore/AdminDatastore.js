import React, { Component } from 'react'
import "../AdminDatastore/AdminDatastore.css"
import { MdAccountCircle } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import image from "../../testLogo2.png";
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export class AdminDatastore extends Component {


    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            setanchorEl: null,
            open: false,
            allDonationRequests:[],
            allVolunteers:[],
            deleteDonationRequestResponse:null,
            isVolunteerInfoModalOpen:false,
            volunteerById:{},
            deleteVolunteerConfirmationModalOpen:false,
        };
    
    }

    handleProfileDropDownOpen = (event) =>{
        this.setState({
            anchorEl:event.currentTarget,

        })
    }

    handleProfileDropDownClose = () =>{
        this.setState({
            open:false,

        })
    }

    handleVolunteerModalOpen = () =>{
        this.setState({
            isVolunteerInfoModalOpen:true,
        })
    }

    handleVolunteerModalClose = () =>{
        this.setState({
            isVolunteerInfoModalOpen:false,
        })
    }

    handleDeleteVolunteerConfirmationOpen = () =>{
        this.setState({
            deleteVolunteerConfirmationModalOpen:true,
        })
    }

    handleVolunteerConfirmationModalClose= () =>{
        this.setState({
            deleteVolunteerConfirmationModalOpen:false,
        })
    }


     componentDidMount() {
     this.fetchAllDonationRequest();
     this.fetchAllVolunteers();
     }


      componentDidUpdate(prevProps , prevState){
        //   if(prevState.allDonationRequests != this.state.allDonationRequests){
        //     this.fetchAllDonationRequest();
        //   }
          if(prevState.allVolunteers != this.state.allVolunteers){
            this.fetchAllVolunteers();
          }

        // this.getVolunteerById();
        
      }


      deleteDonationRequest=(donationId)=>{
        axios.delete(`http://localhost:8080/admin/deleteDonation/${donationId}`).then(res=>{
          console.log(res.data)
        })
      }


  
      deleteInactiveVolunteer=(v_id)=>{
        axios.delete(`http://localhost:8080/admin/deleteInactiveVolunteer/${v_id}`).then(res=>{
          console.log(res.data)
        })
      }      




   async getVolunteerById(e){
        const url = "http://localhost:8080/admin/getVolunteerById/"+e;
        const response = await fetch(url);
        this.setState({
            volunteerById : await response.json(),

         })
         console.log(this.state.volunteerById);
      }




      async fetchAllDonationRequest(){
        const url = "http://localhost:8080/admin/allDonationRequests";
        const response = await fetch(url);
        this.setState({
        allDonationRequests : await response.json(),

         })
         console.log(this.state.allDonationRequests);
      }
  

      async fetchAllVolunteers(){
          const url = "http://localhost:8080/admin/getAllVolunteers";
          const response = await fetch(url);
          this.setState({
            allVolunteers:await response.json(),
          })
      }
    



    render() {
        return (
            <>
            <div className="admin_datastore_navbar">
                <span style={{cursor:"pointer"}}><img src={image} alt="some example image" className="logo" /></span>
                <span>  
                 <MdAccountCircle size="30" className="admin_datastore_profile_icon" style={{cursor:"pointer"}} 
                     onClick={(e) =>
                        this.setState({ open: true, anchorEl: e.currentTarget })
                      }
                 />

      </span>
            </div>

            <div className="admin_datastore_main_container">
                <div className="admin_datastore_container">
                    <div className="admin_datastore_grid_container">
                      <div className="admin_datastore_volunteer_data">
                          <div className="admin_datastore_volunteer_heading">Volunteers available </div>

                            <div className="admin_datastore_volunteer_sub_data">
                            <div className="admin_data_store_volunteer_inside_sub"> 

                           { this.state.allVolunteers.map(volunteers => (
                                <div className="admin_datastore_actual_data" key={volunteers.v_id}>
                                <span> {volunteers.v_firstName}<br />{volunteers.v_lastName}  </span>in <span>{volunteers.v_city} </span>  near <span>{volunteers.v_address} </span>
                                <Button className="datastore_button" variant="contained" value={volunteers.v_id} onClick={(e)=>{this.handleVolunteerModalOpen(); this.getVolunteerById(volunteers.v_id)}}> View more</Button>
                        



                            </div>
                            ))}
                           

                         

                         

                           <Dialog
                                        open={this.state.isVolunteerInfoModalOpen}
                                        keepMounted
                                        onClose={this.handleVolunteerModalClose}
                                        aria-describedby="alert-dialog-slide-description"
                                        >   
                                          {/* {this.state.volunteerById.map(vById => ( */}
                                        <DialogTitle>Info about
                                             {/* {Object.key(volunteerById).map(vById => (
                                             <div>
                                                 {vById.v_id}
                                                  </div>))}  */}


                                                   &nbsp; {this.state.volunteerById.v_firstName}&nbsp;{this.state.volunteerById.v_lastName}  

                                             </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        <b>Mobile number : </b>{this.state.volunteerById.v_mobileNumber}&nbsp;&nbsp;&nbsp;<b>City : </b>{this.state.volunteerById.v_city}
                                            <br /><b>currently in : </b>&nbsp;{this.state.volunteerById.v_address}&nbsp;&nbsp;&nbsp;<b>Age : </b>{this.state.volunteerById.v_age}&nbsp;& counting
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={this.handleVolunteerModalClose} variant="contained" color="success"> UPDATE</Button>
                                        <Button onClick={this.handleVolunteerModalClose} variant="contained" color="error" onClick={()=>{ this.handleVolunteerModalClose(); this.handleDeleteVolunteerConfirmationOpen();}}> DELETE</Button>
                                         
                                        </DialogActions>
                                    
                                        </Dialog>



                            <Dialog 
                            open={this.state.deleteVolunteerConfirmationModalOpen}
                            keepMounted
                            onClose={this.handleDeleteVolunteerConfirmationClose}
                            >
                               <DialogTitle>
                                You sure you want to delete :   
                                </DialogTitle> 
                                  <DialogActions >
                                    <Button variant="contained" color="error" onClick={()=>{this.deleteInactiveVolunteer(this.state.volunteerById.v_id); this.handleVolunteerConfirmationModalClose();}}>YEP DELETE</Button> 
                                    <Button variant="contained" onClick={this.handleVolunteerConfirmationModalClose}>Nope</Button>
                                    </DialogActions>             
                            </Dialog>                                                      
            
                                    

                             </div> 


                            </div>

                      </div>



                      <div className="admin_datastore_donater_data">
                      <div className="admin_datastore_donater_heading">Food pickup requests </div>
                      <div className="admin_data_store_donater_sub_data">
                          <div className="admin_data_store_donater_inside_sub">

                        {this.state.allDonationRequests.map(donations =>(
                        
                        <div className="admin_donater_datastore_actual_data" key={donations.donaterId}>
                        <span className="donater_request_id"><b> Request Id :</b><br/> {donations.donaterId}  </span>
                        <span className="donater_name"><b>Name : </b><br/>{donations.donaterFirstName} &nbsp; {donations.donaterLastName} </span>
                       
                          <span className="donater_mobile_number"><b>Mobile No :</b><br/>{donations.donaterMobileNumber} </span>
                          <span  className="admin_datastore_donater_address" ><b style={{fontSize:"13px"}}>Food pickup address:</b><br/>  
                          {donations.donaterAddress}
                          This will have some address 
                          This will have some address 
                          This will have some address 
                          </span>
                          <span className="donater_city"><b>City :</b> <br/>{donations.donaterCity}</span>
                          <span className="donater_meal_quantity"><b >Meal Quantity :</b><br/> {donations.donaterMealQuantity}</span>
                          <Button variant="contained" className="admin_datastore_donation_request_done_button" onClick={() =>{this.deleteDonationRequest(donations.donaterId);}}>  picked up or canceled</Button>

                </div> ))
                        
                        }

                     </div></div>
 
                      </div>
                    </div>    





                </div>
            </div>




      {/* Profile Dropdown  Menu   */}
     <Menu
        id="basic-menu"
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleProfileDropDownClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={this.handleProfileDropDownClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleProfileDropDownClose}>Settings</MenuItem>
        <MenuItem onClick={this.handleProfileDropDownClose}>Logout</MenuItem>
      </Menu>


            </>
        )
    }
}

export default AdminDatastore
