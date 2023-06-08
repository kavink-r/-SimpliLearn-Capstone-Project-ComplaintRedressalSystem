package com.simplilearn.crs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.entities.pin;
import com.simplilearn.crs.repository.engineerRepo;
import com.simplilearn.crs.repository.managerRepo;
import com.simplilearn.crs.repository.pinRepo;
import com.simplilearn.crs.repository.usersRepo;
import com.simplilearn.crs.services.usersService;


@SpringBootApplication

public class ComplaintRedressalSystemApiApplication implements CommandLineRunner{
	
	@Autowired
	engineerRepo repo;
	@Autowired 
	pinRepo pRepo;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	usersService usrservice;
	
	public static void main(String[] args) {
		SpringApplication.run(ComplaintRedressalSystemApiApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
	}
	
}
