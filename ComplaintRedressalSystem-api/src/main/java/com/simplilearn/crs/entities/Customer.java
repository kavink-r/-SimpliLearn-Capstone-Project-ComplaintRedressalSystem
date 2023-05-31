package com.simplilearn.crs.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Customer extends Users {
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long customerId;
	private String address;
	@OneToOne
	private pin pin;
	private long contactNo;
	
	
}
