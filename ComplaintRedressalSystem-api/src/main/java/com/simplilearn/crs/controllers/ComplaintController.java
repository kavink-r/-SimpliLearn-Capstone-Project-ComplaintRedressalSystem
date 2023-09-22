package com.simplilearn.crs.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.crs.entities.Complaint;
import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.Ticket;
import com.simplilearn.crs.entities.pin;
import com.simplilearn.crs.services.complaintService;
import com.simplilearn.crs.services.managerService;
import com.simplilearn.crs.services.pinService;
import com.simplilearn.crs.services.ticketService;

@RestController
@RequestMapping("api/complaint")

public class ComplaintController {
	@Autowired
	complaintService complaintservice;
	
	@Autowired
	ticketService ticketservice;
	
	@Autowired
	managerService managerservice;
	
	@Autowired 
	pinService pinservice;
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping("/hi")
	public String Handshake() {
		return "HI!!";
	}
	
	@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER')")
	@PostMapping("/raise")
	public ResponseEntity<Map<String,Long>> raiseComplaint(@RequestBody Complaint cmp){
		Map<String,Long> res = new HashMap<>();
		
		try{
		Complaint createdcomplaint = complaintservice.createComplaint(cmp);
		Ticket tempticket =new Ticket();
		Manager tempmgr = managerservice.getManagerForPin(cmp.getPin());
		tempticket.setStatus("RAISED");
		tempticket.setManager(tempmgr);
		Ticket createdticket = ticketservice.createTicket(tempticket);
		complaintservice.addTicketToComplaint(createdcomplaint,createdticket);
		ticketservice.setComplaint(createdticket, createdcomplaint);
		res.put("status",1L);
		res.put("complaintId", createdcomplaint.getComplaintId());
		res.put("ticketId",createdticket.getTicketId());
		return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
		}catch(Exception e) {
			res.put("status",0L);
			return new ResponseEntity<Map<String,Long>>(res,HttpStatus.EXPECTATION_FAILED);
		}
	}
	@PreAuthorize("hasAnyAuthority('ADMIN','MANAGER')")
	@GetMapping("/all")
	public List<Complaint> getAllComplaints(){
		return complaintservice.getAllComplaints();
	}
	@PreAuthorize("hasAnyAuthority('ADMIN','MANAGER','CUSTOMER')")
	@GetMapping("/cuscomplaints")
	public List<Complaint> getAllCustomerComplaints(@RequestParam(name = "cid") Long cusId){
		return complaintservice.getAllCustomerComplaints(cusId);
	}
	
	@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER')")
	@PostMapping("/ticketreraise")
	public ResponseEntity<Map<String,Long>> reRaiseTicket(@RequestBody Complaint cmp){
		Map<String,Long> res = new HashMap<>();
		try {
			Ticket tempticket = new Ticket();
			Manager tempmgr = managerservice.getManagerForPin(cmp.getPin());
			tempticket.setStatus("RAISED");
			tempticket.setManager(tempmgr);
			Ticket createdticket = ticketservice.createTicket(tempticket);
			complaintservice.addTicketToComplaint(cmp, createdticket);
			ticketservice.setComplaint(createdticket, cmp);
			res.put("status", 1L);
			res.put("complaintId", cmp.getComplaintId());
			res.put("ticketId", createdticket.getTicketId());
			return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
		}catch(Exception e) {
			res.put("status",0L);
			return new ResponseEntity<Map<String,Long>>(res,HttpStatus.EXPECTATION_FAILED);
		}
	}
	@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER')")
	@PostMapping("/addfeedback")
	public  ResponseEntity<Map<String,Long>> addFeedback(@RequestBody Complaint cmp){
		Map<String,Long> res = new HashMap<>();
		Long status = complaintservice.addFeedback(cmp.getComplaintId(), cmp.getFeedback());
		res.put("status", status);
		return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
	}
	@GetMapping("/allpin")
	@PreAuthorize("hasAnyAuthority('ADMIN','ENGINEER','MANAGER','CUSTOMER')")
	public List<pin> getAllPins(){
		return pinservice.getAllPin();
	}
	@PostMapping("/addpin")
	@PreAuthorize("hasAuthority('ADMIN')")
	public  ResponseEntity<Map<String,Integer>> addpin(@RequestBody pin p){
		Map<String,Integer> res = new HashMap<>();
		int status = pinservice.addPin(p);
		res.put("status", status);
		
		return new ResponseEntity<Map<String,Integer>>(res,HttpStatus.OK);
	}
	@GetMapping("/managerforpin")
	@PreAuthorize("hasAuthority('ADMIN')")
	public ResponseEntity<Manager> getManagerForpin(@RequestParam(name="pin") long pin){
		Manager m = managerservice.getManagerForPin(new pin(pin));
		return new ResponseEntity<Manager>(m,HttpStatus.OK);
	}
	}
