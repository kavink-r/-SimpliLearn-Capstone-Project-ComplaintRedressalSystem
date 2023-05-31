package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.pin;
import com.simplilearn.crs.repository.pinRepo;

@Service
public class pinService {
	
	@Autowired
	private pinRepo repo;

	public int addPin(pin pin) {
		try {
			repo.save(pin);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}

	public List<pin> getAllPin() {
		return repo.findAll();
	}

	public int deletePin(pin pin) {
		try {
			repo.delete(pin);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}
}
