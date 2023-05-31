package com.simplilearn.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.pin;

@Repository
public interface pinRepo extends JpaRepository<pin, Long> {

}
