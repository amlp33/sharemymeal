import React, { Component } from 'react'
import "../AdminDatastore/AdminDatastore.css"
import { MdAccountCircle } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import image from "../../testLogo2.png";
export class AdminDatastore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            setanchorEl: null,
            open: false,
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

                             <div className="admin_datastore_actual_data">
                                <span> Rahul  </span>in <span>Pune </span>  near <span>Kharadi </span>
                                <Button  className="datastore_button available" variant="contained">Available</Button>
                             </div>

                             <div className="admin_datastore_actual_data">
                                <span> Yash  </span>in <span>Pune </span>  near <span>Sinhagad </span>
                                <Button  className="datastore_button unavailable" variant="contained">Unavailable</Button>
                             </div>
                             <div className="admin_datastore_actual_data">
                                <span> Himanshu  </span>in <span>Pune </span>  near <span>Yerwada </span>
                                <Button  className="datastore_button available" variant="contained">Available</Button>
                             </div>
                             <div className="admin_datastore_actual_data">
                                <span> Avinash  </span>in <span>Pune </span>  near <span>Kothrud </span>
                                <Button  className="datastore_button unavailable" variant="contained">Unavailable</Button>
                             </div>
                             <div className="admin_datastore_actual_data">
                                <span> Avinash  </span>in <span>Pune </span>  near <span>Kothrud </span>
                                <Button  className="datastore_button unavailable" variant="contained">Unavailable</Button>
                             </div>
                             <div className="admin_datastore_actual_data">
                                <span> Himanshu  </span>in <span>Pune </span>  near <span>Yerwada </span>
                                <Button  className="datastore_button available" variant="contained">Available</Button>
                             </div>

                               <div className="admin_datastore_actual_data">
                                <span> Himanshu  </span>in <span>Pune </span>  near <span>Yerwada </span>
                                <Button  className="datastore_button available" variant="contained">Available</Button>
                             </div>

                             
                               <div className="admin_datastore_actual_data">
                                <span> Himanshu  </span>in <span>Pune </span>  near <span>Yerwada </span>
                                <Button  className="datastore_button available" variant="contained">Available</Button>
                             </div> 

                             </div> 


                            </div>

                      </div>



                      <div className="admin_datastore_donater_data">
                      <div className="admin_datastore_donater_heading">Food pickup requests </div>
                      <div className="admin_datastore_donater_sub_data">


                     </div>
 
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
