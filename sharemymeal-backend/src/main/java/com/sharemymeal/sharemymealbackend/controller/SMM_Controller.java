package com.sharemymeal.sharemymealbackend.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharemymeal.sharemymealbackend.model.SMM;
import com.sharemymeal.sharemymealbackend.model.Volunteer;
import com.sharemymeal.sharemymealbackend.service.SMM_Service;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class SMM_Controller {
	@Autowired
	private SMM_Service smmService;
	
	
	@PostMapping("/donationRequest")
	public String saveDonater(@RequestBody SMM donater) {
		
		smmService.saveDonater(donater);
		return "New Donation request added ";
	}
	
	@GetMapping("/allDonationRequests")
	public List<SMM> getAllDonationRequest(){
		return  smmService.getAllDonationRequest();
	}
	
	@DeleteMapping("/deleteDonation/{donaterId}")
	public String deleteDonation(@PathVariable Integer donaterId) {
		smmService.deleteDonationRequest(donaterId);
		return "Successfully deleted";
		
	}
	
	@PostMapping("/addVolunteer")
	public String saveVolunteer(@RequestBody Volunteer volunteer) {
		smmService.saveVolunteer(volunteer);
		return "New Volunteer added successfully ";
	}
	
	@GetMapping("/getAllVolunteers")
	public List<Volunteer> getAllVolunteers(){
		return  smmService.getAllVolunteers();
	}
	
	@DeleteMapping("/deleteInactiveVolunteer/{v_id}")
	public String deleteInactiveVolunteer(@PathVariable Integer v_id) {
		smmService.deleteInactiveVolunteer(v_id);
		return "Volunteer deleted successfully";
	}
	
	
	@GetMapping("/getVolunteerById/{v_id}")
	public ResponseEntity<Volunteer> getVolunteerById(@PathVariable Integer v_id) {
		try {
			Volunteer volunteer = smmService.getVolunteerById(v_id);
			return new ResponseEntity<Volunteer>(volunteer, HttpStatus.OK); 
		}catch(NoSuchElementException e){
			return new ResponseEntity<Volunteer>(HttpStatus.NOT_FOUND);
		  }
		
	}
	
	
//	@PutMapping("/updateVolunteer")
//	public Volunteer updateVolunteerById(@RequestBody Volunteer volunteer){
//				return smmService.updateVolunteerById(volunteer);
//								
//	}
	
	@PutMapping("/update/{v_id}")
	public Volunteer updateVolunteer(@RequestBody Volunteer volunteer , @PathVariable Integer v_id) {
		return smmService.updateVolunteer(volunteer, v_id);
	}
	
	
	
	
}


