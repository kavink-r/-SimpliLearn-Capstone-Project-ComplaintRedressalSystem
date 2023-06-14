package com.simplilearn.crs.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.crs.entities.Customer;
import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.repository.customerRepo;
import com.simplilearn.crs.security.userSecurityObj;
import com.simplilearn.crs.services.customerService;
import com.simplilearn.crs.services.engineerService;
import com.simplilearn.crs.services.managerService;
import com.simplilearn.crs.services.usersService;

@RestController
@RequestMapping("api/user")
@PreAuthorize("hasAuthority('ADMIN')")
public class userController {

	@Autowired
	usersService usrService;
	@Autowired
	managerService mgrService;
	@Autowired
	engineerService engrService;
	@Autowired
	customerService cusService;
	
	
	@GetMapping("/")
	public String hanshake() {
		return "Hello!";
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Users>> getAllUsers() {
		List<Users> listOfUsers = usrService.findAllUsers();
		ResponseEntity<List<Users>> res = new ResponseEntity<List<Users>>(listOfUsers, HttpStatus.OK);
		return res;
	}

	
	@PostMapping("/adduser")
	public ResponseEntity<Map<String, Integer>> addUser(@RequestBody Users user) {
		Map<String, Integer> status = new HashMap<>();
		status.put("status", usrService.addUser(user));
		return new ResponseEntity<Map<String, Integer>>(status, HttpStatus.OK);
	}

	
	@DeleteMapping("/deleteuser")
	public ResponseEntity<Map<String, Integer>> deleteUser(@RequestParam("userid") long userid ) {
		Map<String, Integer> status = new HashMap<>();
		status.put("status", usrService.deleteUser(userid));
		return new ResponseEntity<Map<String, Integer>>(status, HttpStatus.OK);
	}

	
	@PostMapping("/addmanager")
	public ResponseEntity<Map<String, Integer>> addManager(@RequestBody Manager mgr) {
		Map<String, Integer> status = new HashMap<>();
		status.put("status", mgrService.addManager(mgr));
		return new ResponseEntity<Map<String, Integer>>(status, HttpStatus.OK);
	}

	
	@PostMapping("/addengineer")
	public ResponseEntity<Map<String, Integer>> addEngineer(@RequestBody Engineer eng) {
		Map<String, Integer> status = new HashMap<>();
		status.put("status", engrService.addEngineer(eng));
		return new ResponseEntity<Map<String, Integer>>(status, HttpStatus.OK);
	}

	
	@PostMapping("/addcustomer")
	public ResponseEntity<Map<String, Integer>> addCustomer(@RequestBody Customer cus) {
		Map<String, Integer> status = new HashMap<>();
		status.put("status", cusService.addCustomer(cus));
		return new ResponseEntity<Map<String, Integer>>(status, HttpStatus.OK);
	}
	
	@GetMapping("/allmanagers")
	public ResponseEntity<List<Manager>> getAllManagers() {
		List<Manager> mgrs = mgrService.getAllManagers();
		return new ResponseEntity<List<Manager>>(mgrs, HttpStatus.OK);
	}
	
	@GetMapping("/allengineers")
	public ResponseEntity<List<Engineer>> getAllEngineer(){
		List<Engineer> egrs = engrService.findAllEngineers();
		return new ResponseEntity<List<Engineer>>(egrs,HttpStatus.OK);
	}
	
	@GetMapping("/allcustomers")
	public ResponseEntity<List<Customer>> getAllCustomers(){
		List<Customer> customers = cusService.getAllCustomers();
		return new ResponseEntity<List<Customer>>(customers,HttpStatus.OK);
	}
	
	
}
