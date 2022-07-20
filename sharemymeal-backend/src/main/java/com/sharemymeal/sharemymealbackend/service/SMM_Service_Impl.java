package com.sharemymeal.sharemymealbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharemymeal.sharemymealbackend.model.SMM;
import com.sharemymeal.sharemymealbackend.model.Volunteer;
import com.sharemymeal.sharemymealbackend.repository.SMM_Repository;
import com.sharemymeal.sharemymealbackend.repository.VolunteeRepository;

@Service
public class SMM_Service_Impl implements SMM_Service{

	@Autowired
	private SMM_Repository smmRepository;
	
	@Autowired
	private VolunteeRepository volunteerRepository;
	
	
	@Override
	public SMM saveDonater(SMM donater) {
		return smmRepository.save(donater);
	}


	@Override
	public List<SMM> getAllDonationRequest() {
		// TODO Auto-generated method stub
		return smmRepository.findAll() ;
	}
	
	@Override
	public void deleteDonationRequest(Integer donaterId) {
		smmRepository.deleteById(donaterId);
	}


	@Override
	public Volunteer saveVolunteer(Volunteer volunteer) {
		return volunteerRepository.save(volunteer);

	}


	@Override
	public List<Volunteer> getAllVolunteers() {
		return volunteerRepository.findAll();
	}


	@Override
	public void deleteInactiveVolunteer(Integer v_id) {
		 volunteerRepository.deleteById(v_id);
		
	}


	@Override
	public Volunteer getVolunteerById(Integer v_id) {
		return volunteerRepository.findById(v_id).get();
	}

//
//	@Override
//	public Volunteer updateVolunteerById(Volunteer volunteer) {
//		Volunteer existingVolunteer = volunteerRepository.findById(volunteer.getV_id()).orElse(null);
//		existingVolunteer.setV_address(volunteer.getV_address());
//		existingVolunteer.setV_city(volunteer.getV_city());
//		existingVolunteer.setV_mobileNumber(volunteer.getV_mobileNumber());	
//		return volunteerRepository.save(existingVolunteer);
//	
//	}


	@Override
	public Volunteer updateVolunteer(Volunteer volunteer, Integer v_id) {
		Volunteer existingVolunteer = volunteerRepository.findById(v_id).orElse(null);
		existingVolunteer.setV_address(volunteer.getV_address());
		existingVolunteer.setV_city(volunteer.getV_city());
		existingVolunteer.setV_mobileNumber(volunteer.getV_mobileNumber());
		
		return volunteerRepository.save(existingVolunteer);
	}
	
	
	
}
