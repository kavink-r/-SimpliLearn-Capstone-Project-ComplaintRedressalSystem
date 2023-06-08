package com.simplilearn.crs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.pin;

@Repository
public interface engineerRepo extends JpaRepository<Engineer, Long> {

	public List<Engineer> findByLocations(pin locations);
}
