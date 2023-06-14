package com.simplilearn.crs.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class pin implements Serializable{
	
	@Id

	private long pin;
	public pin(long pin) {
		this.pin=pin;
	}
	public pin() {
		// TODO Auto-generated constructor stub
	}
	public pin(Long pin) {
		this.pin=pin;
	}

}
