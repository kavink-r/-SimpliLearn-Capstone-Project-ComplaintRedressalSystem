package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.pin;
import com.simplilearn.crs.repository.engineerRepo;
import com.simplilearn.crs.repository.pinRepo;

@Service
public class engineerService {
	@Autowired
	engineerRepo repo;
	
	@Autowired
	pinRepo prepo;
	
	@Autowired
	PasswordEncoder encoder;

	public List<Engineer> findAllEngineers() {
		return repo.findAll();
	}
	
	public int addEngineer(Engineer eng) {
		try {
			System.out.println(eng);
			eng.setPassword(encoder.encode(eng.getPassword()));
			repo.save(eng);
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public int deleteEngineer(Engineer eng) {
		try {
			repo.delete(eng);
			return 1;
		}catch(Exception e) {
			return 0;
		}
	}
	
	public int allocatePin(Long pin, Engineer eng) {
		try {
		pin p = prepo.findById(pin).get();
		eng.addPin(p);
		repo.save(eng);
		return 1;
		}catch(Exception e) {
			return 0;
		}
	}
	
	public List<Engineer> getEngineerForPin(pin pin){
		try {
			return repo.findByLocations(pin);
		}catch(Exception e) {
			System.out.println(2);
			return null;
		}
	}
}
