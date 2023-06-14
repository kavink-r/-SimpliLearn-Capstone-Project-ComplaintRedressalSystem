package com.simplilearn.crs.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Entity
@Data
public class Engineer extends Users {
	
	
	
/**
	 * 
	 */
	private static final long serialVersionUID =2899903505215516240L;
@ManyToMany
private List<pin> locations;
private Long contactNo;


public void addPin(pin pin) {
	this.locations.add(pin);
}


@Override
public String toString() {
	return "Engineer [locations=" + locations + ", contactNo=" + contactNo  + super.toString()
			+ ", getClass()=" + getClass() + "]";
}

}