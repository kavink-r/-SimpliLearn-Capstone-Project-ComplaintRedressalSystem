package com.simplilearn.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Manager;

@Repository
public interface managerRepo extends JpaRepository<Manager, Long> {

}
