package com.simplilearn.crs.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data

public class Manager extends Users {

	@OneToOne
	private pin pin;
	private long contactNo;
	

}
