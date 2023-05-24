package com.simplilearn.crs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.repository.usersRepo;

@Service
public class usersService {

	@Autowired
	private usersRepo repo;
	
	public String addUser(Users usr) {
		repo.save(usr);
		return "1";
	}
	
	public String deleteUser(Users usr) {
		repo.delete(usr);
		return "1";
	}
	
	public String changeStatus(String username, boolean status) {
		Users usr = repo.findByUsername(username);
		usr.setAccountStatus(status);
		return "1";
		
	}
}
