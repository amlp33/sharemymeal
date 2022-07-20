package com.sharemymeal.sharemymealbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SMM {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int donaterId;
	private String donaterFirstName;
	private String donaterLastName;
	private long donaterMobileNumber;
	private String donaterAddress;
	private String donaterCity;
	private int donaterMealQuantity;
	
	
	
	public SMM() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getDonaterId() {
		return donaterId;
	}
	public void setDonaterId(int donaterId) {
		this.donaterId = donaterId;
	}
	public String getDonaterFirstName() {
		return donaterFirstName;
	}
	public void setDonaterFirstName(String donaterFirstName) {
		this.donaterFirstName = donaterFirstName;
	}
	public String getDonaterLastName() {
		return donaterLastName;
	}
	public void setDonaterLastName(String donaterLastName) {
		this.donaterLastName = donaterLastName;
	}
	public long getDonaterMobileNumber() {
		return donaterMobileNumber;
	}
	public void setDonaterMobileNumber(long donaterMobileNumber) {
		this.donaterMobileNumber = donaterMobileNumber;
	}
	public String getDonaterAddress() {
		return donaterAddress;
	}
	public void setDonaterAddress(String donaterAddress) {
		this.donaterAddress = donaterAddress;
	}
	public String getDonaterCity() {
		return donaterCity;
	}
	public void setDonaterCity(String donaterCity) {
		this.donaterCity = donaterCity;
	}
	public int getDonaterMealQuantity() {
		return donaterMealQuantity;
	}
	public void setDonaterMealQuantity(int donaterMealQuantity) {
		this.donaterMealQuantity = donaterMealQuantity;
	}
	
	
	
	
}
