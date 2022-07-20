package com.sharemymeal.sharemymealbackend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sharemymeal.sharemymealbackend.model.SMM;
import com.sharemymeal.sharemymealbackend.model.Volunteer;

public interface SMM_Service {
public SMM saveDonater(SMM donater);
public List<SMM> getAllDonationRequest();
public  void deleteDonationRequest(Integer donaterId); 
public Volunteer saveVolunteer(Volunteer volunteer);
public List<Volunteer> getAllVolunteers();
public void deleteInactiveVolunteer(Integer v_id);
public Volunteer getVolunteerById(Integer v_id);
//public Volunteer updateVolunteerById(Volunteer volunteer );
public Volunteer updateVolunteer(Volunteer volunteer, Integer v_id);






	
}
