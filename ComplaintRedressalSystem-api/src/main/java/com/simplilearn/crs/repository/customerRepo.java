package com.simplilearn.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Customer;

@Repository
public interface customerRepo extends JpaRepository<Customer, Long> {

}
