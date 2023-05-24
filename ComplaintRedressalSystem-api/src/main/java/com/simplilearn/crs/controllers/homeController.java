package com.simplilearn.crs.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.services.usersService;

@RestController
@RequestMapping("api/home")
public class homeController {
		
		@Autowired
		usersService service;
		@Autowired 
		PasswordEncoder encoder;
		
		@GetMapping("/")
		public String welcome() {
			return "Hi";
		}
		@PostMapping("/add")
		public ResponseEntity<String> adduser(@RequestBody Users usr){
			System.out.println("Method initiated, Receivedobject: "+usr);
			String password = usr.getPassword();
			usr.setPassword(encoder.encode(password));
			service.addUser(usr);
			return new ResponseEntity<String>("Success!",HttpStatus.OK);
		}
		@GetMapping("/user")
		public ResponseEntity<String> user(){
			return new ResponseEntity<>("Welcome User!",HttpStatus.OK);
		}
		
		@GetMapping("/admin")
		public ResponseEntity<String> admin(){
			return new ResponseEntity<>("Welcome Admin!",HttpStatus.OK);
		}
}
