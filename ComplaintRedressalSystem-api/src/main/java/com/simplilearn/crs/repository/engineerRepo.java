package com.simplilearn.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Engineer;

@Repository
public interface engineerRepo extends JpaRepository<Engineer, Long> {

}
