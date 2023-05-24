package com.simplilearn.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Users;

@Repository
public interface usersRepo extends JpaRepository<Users, Long> {
	public Users findByUsername(String Username);
}
