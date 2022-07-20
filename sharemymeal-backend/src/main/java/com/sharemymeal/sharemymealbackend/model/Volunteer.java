package com.sharemymeal.sharemymealbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Volunteer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int v_id;
	private String v_firstName;
	private String v_lastName;
	private long v_mobileNumber;
	private String v_age;
	private String v_address;
	private String v_city;
	public Volunteer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getV_id() {
		return v_id;
	}
	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	public String getV_firstName() {
		return v_firstName;
	}
	public void setV_firstName(String v_firstName) {
		this.v_firstName = v_firstName;
	}
	public String getV_lastName() {
		return v_lastName;
	}
	public void setV_lastName(String v_lastName) {
		this.v_lastName = v_lastName;
	}
	public long getV_mobileNumber() {
		return v_mobileNumber;
	}
	public void setV_mobileNumber(long v_mobileNumber) {
		this.v_mobileNumber = v_mobileNumber;
	}
	public String getV_age() {
		return v_age;
	}
	public void setV_age(String v_age) {
		this.v_age = v_age;
	}
	public String getV_address() {
		return v_address;
	}
	public void setV_address(String v_address) {
		this.v_address = v_address;
	}
	public String getV_city() {
		return v_city;
	}
	public void setV_city(String v_city) {
		this.v_city = v_city;
	}
	
	
	
	
	
}
