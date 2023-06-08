package com.simplilearn.crs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.pin;

@Repository
public interface managerRepo extends JpaRepository<Manager, Long> {

	public Manager findByPin(pin pin);
	
}
