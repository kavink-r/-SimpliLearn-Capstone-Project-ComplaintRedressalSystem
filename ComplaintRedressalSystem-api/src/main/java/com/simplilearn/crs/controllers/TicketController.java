package com.simplilearn.crs.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.crs.entities.Complaint;
import com.simplilearn.crs.entities.Ticket;
import com.simplilearn.crs.services.ticketService;

@RestController
@RequestMapping("api/ticket")
public class TicketController {
@Autowired
ticketService tktservice;

@PreAuthorize("hasAnyAuthority('ADMIN','MANAGER')")
@GetMapping("/all")
public List<Ticket> getAllTicket(){
	return tktservice.getAllTickets();
}

@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','ENGINEER','MANAGER')")
@GetMapping("/ticketdata")
public Ticket getTicketData(@RequestParam(name="ticketId")Long ticketID) {
	return tktservice.getTicket(ticketID);
}
@PreAuthorize("hasAnyAuthority('ADMIN','CUSTOMER','ENGINEER','MANAGER')")
@GetMapping("/complaintdata")
public Complaint getComplaintData(@RequestParam(name="ticketId")Long ticketID) {
	return tktservice.getTicket(ticketID).getComplaint();
}
@PatchMapping("/updatestatus")
@PreAuthorize("hasAnyAuthority('ADMIN','ENGINEER','MANAGER')")
public  ResponseEntity<Map<String,Long>> statusUpdate (@RequestBody Ticket tkt){
	Map<String,Long> res = new HashMap<>();
	Long status = tktservice.updateStatus(tkt.getTicketId(), tkt.getStatus());
	res.put("status", status);
	return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
}
@PatchMapping("/updatecomment")
@PreAuthorize("hasAnyAuthority('ADMIN','ENGINEER','MANAGER')")
public  ResponseEntity<Map<String,Long>> commentUpdate (@RequestBody Ticket tkt){
	Map<String,Long> res = new HashMap<>();
	Long status = tktservice.updateComment(tkt.getTicketId(), tkt.getComment());
	res.put("status", status);
	return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
}
@PatchMapping("/assignEngineer")
@PreAuthorize("hasAnyAuthority('ADMIN','MANAGER')")
public ResponseEntity<Map<String,Long>> assignEngineer(@RequestBody Ticket tkt){
	Map<String,Long> res = new HashMap<>();
	Long status = tktservice.assignEngineer(tkt);
	res.put("status", status);
	return new ResponseEntity<Map<String,Long>>(res,HttpStatus.OK);
}
@GetMapping("/engineeralltickets")
@PreAuthorize("hasAnyAuthority('ADMIN','ENGINEER','MANAGER')")
public ResponseEntity<List<Ticket>> getEngineerTickets(@RequestParam(name="engineerid") Long engineerId){
	List<Ticket> engrTickets = tktservice.getEngTickets(engineerId);
	return new ResponseEntity<List<Ticket>>(engrTickets,HttpStatus.OK);
}

@GetMapping("/engineeropentickets")
@PreAuthorize("hasAnyAuthority('ADMIN','ENGINEER','MANAGER')")
public ResponseEntity<List<Ticket>> getEngineerOpenTickets(@RequestParam(name="engineerid") Long engineerId){
	List<Ticket> engrTickets = tktservice.getEngOpenTickets(engineerId);
	return new ResponseEntity<List<Ticket>>(engrTickets,HttpStatus.OK);
}
}
