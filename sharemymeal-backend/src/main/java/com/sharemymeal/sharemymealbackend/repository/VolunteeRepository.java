package com.sharemymeal.sharemymealbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sharemymeal.sharemymealbackend.model.Volunteer;


@Repository
public interface VolunteeRepository extends JpaRepository<Volunteer , Integer>{
		
}
