package com.simplilearn.crs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Complaint;
import com.simplilearn.crs.entities.Customer;

@Repository
public interface complaintRepo extends JpaRepository<Complaint, Long> {

	public List<Complaint> findByCustomer(Customer customer);
}
