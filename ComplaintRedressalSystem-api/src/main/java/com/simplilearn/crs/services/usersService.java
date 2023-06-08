package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.repository.usersRepo;

@Service
public class usersService {

	@Autowired
	private usersRepo repo;
	
	public int addUser(Users usr) {
		repo.save(usr);
		return 1;
	}
	
	public int deleteUser(long usrid) {
		Users usr = repo.findById(usrid).get();
		repo.delete(usr);
		return 1;
	}
	
	public int changeStatus(String username, boolean status) {
		Users usr = repo.findByUsername(username);
		usr.setAccountStatus(status);
		return 1;
		
	}
	public Users findUser(String username) {
		return repo.findByUsername(username);
	}
	public List<Users> findAllUsers(){
		return repo.findAll();
	}
}
