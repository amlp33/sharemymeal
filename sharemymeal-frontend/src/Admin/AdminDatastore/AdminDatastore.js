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
import TextField from '@mui/material/TextField';

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
            v_mobileNumber:"",
            v_address:"",
            v_city:"",
            volunteerUpdateModalOpen:false,
          };
    



        this.getVolunteerById = this.getVolunteerById.bind(this);
        this.handleVolunteerOnChange = this.handleVolunteerOnChange.bind(this);

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

    handleVolunteerOnChange(e,v){
      // const target = event.target
      // const name = target.name
      
      this.setState({
        [e.target.name]: v
      });
      // console.log([e.target.])
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


    handleVolunteerUpdateModalOpen = () =>{
      this.setState({
        v_city:null,v_mobileNumber:null,v_address:null,
        volunteerUpdateModalOpen:true,
      })
    }


    handleVolunteerUpdateModalClose = () =>{
      this.setState({
        volunteerUpdateModalOpen:false,
      })
    }


handleChange = ({target}) =>{
  this.setState({
    [target.name]:target.value
  })
}


     componentDidMount(){
      this.fetchAllDonationRequest();
      this.fetchAllVolunteers();      
     }


      componentDidUpdate(prevState , nextState){

            // this.fetchAllDonationRequest();
  
            this.fetchAllVolunteers();
        

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

    
      updateVolunteer = (v_id) => {
        const data = {
          v_address:this.state.v_address,
          v_city:this.state.v_city,
          v_mobileNumber:this.state.v_mobileNumber
        }
        axios.put(`http://localhost:8080/admin/update/${v_id}`,data).then(response =>{
          console.log(response.data)
        })
        console.log(v_id)

      }



     getVolunteerById(e){
         axios.get(`http://localhost:8080/admin/getVolunteerById/${e}`).then(response =>{
          console.log(this.state.volunteerById);

           this.setState({
             volunteerById:response.data,
             vArray:response.data,
           },
           console.log(this.state.volunteerById),


           )
         })
         console.log(this.state.volunteerById)

      }




        fetchAllDonationRequest(){
        const url = "http://localhost:8080/admin/allDonationRequests";
        // const response = await fetch(url);
       
       axios.get(`http://localhost:8080/admin/allDonationRequests`).then(response => {
        this.setState({
          allDonationRequests :  response.data,
  
           }) 
       })
       
        





         console.log(this.state.allDonationRequests);
      }
  

      async fetchAllVolunteers(){
          const url = "http://localhost:8080/admin/getAllVolunteers";
          const response = await fetch(url);
          this.setState({
            allVolunteers:await response.json(),
          })
          // await this.getVolunteerById(this.state.allVolunteers[0].v_id);


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
                                <Button className="datastore_button" variant="contained" onClick={()=>{this.handleVolunteerModalOpen();this.getVolunteerById(volunteers.v_id) }} > View more</Button>
                            </div>
                            ))}
                           
                           
                           {/* {() => {if(this.state.volunteerById != null) return <> */}

                                        <Dialog
                                        open={this.state.isVolunteerInfoModalOpen}
                                        keepMounted
                                        onClose={this.handleVolunteerModalClose}
                                        aria-describedby="alert-dialog-slide-description"
                                        >   
                                        <DialogTitle>Info about

                                                  &nbsp; {this.state.volunteerById.v_firstName}&nbsp;{this.state.volunteerById.v_lastName}  

                                                
                                              </DialogTitle>
                                          <DialogContent>
                                        <DialogContentText className="volunteer_update_delete_grid">
                                        {/* First name : <TextField  id="standard-basic" variant="standard"  value={this.state.volunteerById.v_firstName}/> Last name : <TextField id="standard-basic"  variant="standard" value={this.state.volunteerById.v_lastName} /> */}

                                        Mobile No : <TextField style={{width:"100%"}}  id="standard-basic" variant="outlined" disabled size="small" name="v_mobileNumber"  value={this.state.volunteerById.v_mobileNumber} onChange={this.handleChange}/>
                                        City : <TextField  id="standard-basic" variant="outlined" disabled  size="small" name="v_city" value={this.state.volunteerById.v_city} onChange={this.handleChange} /> 
                                              currently in : <TextField  id="standard-basic" variant="outlined"  size="small" disabled  name="v_address" value={this.state.volunteerById.v_address} onChange={this.handleChange}/> 
                                                Age : <TextField  id="standard-basic" variant="outlined" size="small"   disabled name="v_age" value={this.state.volunteerById.v_age} onChange={this.handleChange} />
                                              
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={this.handleVolunteerModalClose} variant="contained" color="success" onClick={() => {this.handleVolunteerUpdateModalOpen(); this.handleVolunteerModalClose();  }}> UPDATE</Button>
                                        <Button onClick={this.handleVolunteerModalClose} variant="contained" color="error" onClick={()=>{ this.handleVolunteerModalClose(); this.handleDeleteVolunteerConfirmationOpen();}}> DELETE</Button>
                                        
                                        </DialogActions>
                                    
                                        </Dialog>

                                        {/* </>
                                              return <div>nothing</div> }} */}




                                <Dialog 
                                open={this.state.deleteVolunteerConfirmationModalOpen}
                                keepMounted
                                aria-describedby="alert-dialog-slide-description"

                                onClose={this.handleVolunteerConfirmationModalClose}
                                >


                                <DialogTitle>
                                You sure you want to delete <b>{this.state.volunteerById.v_firstName} </b> <br/> {this.state.volunteerById.v_firstName} is a great person!!
                                </DialogTitle> 
                                  <DialogActions >
                                    <Button variant="contained" color="error" onClick={()=>{this.deleteInactiveVolunteer(this.state.volunteerById.v_id); this.handleVolunteerConfirmationModalClose();}}>YEP DELETE</Button> 
                                    <Button variant="contained" onClick={this.handleVolunteerConfirmationModalClose}>Nope</Button>
                                    </DialogActions>      
                                            
                                </Dialog>                                                      


                                  

                                <Dialog 
                                open={this.state.volunteerUpdateModalOpen}
                                keepMounted
                                aria-describedby="alert-dialog-slide-description"

                                onClose={this.handleVolunteerUpdateModalClose}
                                >


                                <DialogTitle>
                                  Update info for {this.state.volunteerById.v_firstName}
                                </DialogTitle> 
                                <DialogContent>

                                <DialogContentText className="volunteer_update_delete_grid">
                                        {/* First name : <TextField  id="standard-basic" variant="standard"  value={this.state.volunteerById.v_firstName}/> Last name : <TextField id="standard-basic"  variant="standard" value={this.state.volunteerById.v_lastName} /> */}
                                        Current Mobile No :  <span>{this.state.volunteerById.v_mobileNumber} </span>       
                                        Update Mobile No : <TextField style={{width:"100%"}} id="standard-basic" variant="standard"  name="v_mobileNumber"  size="small" onChange={this.handleChange} />
                                        Current City :   <span>{this.state.volunteerById.v_city}</span>
                                        Update City : <TextField  id="standard-basic" variant="standard"   size="small" name="v_city" onChange={(e) => { this.setState({ v_city:e.target.value})}} /> 
                                        Current Address :<span> {this.state.volunteerById.v_address}</span>
                                        Update Address : <TextField  id="standard-basic" variant="standard"  size="small"  name ="v_address" onChange={this.handleChange}/> 
                                              
                                        </DialogContentText>
                                        </DialogContent>

                                  <DialogActions >
                                    <Button variant="contained" color="error" onClick={()=>{this.updateVolunteer(this.state.volunteerById.v_id); this.handleVolunteerUpdateModalClose();}}>update</Button> 
                                    <Button variant="contained" onClick={this.handleVolunteerUpdateModalClose}>Cancel</Button>
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
