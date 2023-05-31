package com.simplilearn.crs.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long complaintId;
	private String name;
	private String address;
	@ManyToOne
	private pin pin;
	private long contactNo;
	@ManyToOne
	private Customer customer;
	private String subject;
	private String details;
	private String feedback;
	@OneToMany(mappedBy = "complaint")
	private List<Ticket> ticket;
	@Column(updatable = false)
	@CreationTimestamp
	private LocalDateTime createdAt;
	@UpdateTimestamp
	private LocalDateTime lastUpdated;
	
	public void addTicket(Ticket tkt) {
		this.ticket.add(tkt);
	}
}
