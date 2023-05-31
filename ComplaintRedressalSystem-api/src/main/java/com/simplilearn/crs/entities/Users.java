package com.simplilearn.crs.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class Users implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long userid;
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String username;
	private String Password;
	private String email;
	private String roles;
	private boolean accountStatus;
	
}
