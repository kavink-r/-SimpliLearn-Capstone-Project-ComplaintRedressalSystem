package com.simplilearn.crs.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Users implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long userid;
	private String firstName;
	private String lastName;
	private String username;
	private String Password;
	private String email;
	private String roles;
	private boolean accountStatus;
	
}
