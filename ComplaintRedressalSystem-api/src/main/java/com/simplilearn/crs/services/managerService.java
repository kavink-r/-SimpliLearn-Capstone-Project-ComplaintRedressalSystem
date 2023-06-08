package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.pin;
import com.simplilearn.crs.repository.managerRepo;

@Service
public class managerService {

	@Autowired
	managerRepo repo;
	
	@Autowired
	PasswordEncoder encoder;
	public List<Manager>getAllManagers() {
		return repo.findAll();
	}
	
	public int addManager(Manager mgr) {
		try {
			mgr.setPassword(encoder.encode(mgr.getPassword()));;
			repo.save(mgr);
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public int deleteManager(Manager mgr) {
		try {
			repo.delete(mgr);
			return 1;
		}catch(Exception e) {
			return 0;
		}
	}
	
	public int setPin(Long managerId, pin pin) {
		try {
		Manager mgr = repo.findById(managerId).get();
		mgr.setPin(pin);
		return 1;
		}catch(Exception e) {
			return 0;
		}
	}
	public Manager getManagerForPin(pin pin) {
		try {
			return repo.findByPin(pin);
		}catch(Exception e) {
			System.out.println(e);
			return null;
		}
	}
}
