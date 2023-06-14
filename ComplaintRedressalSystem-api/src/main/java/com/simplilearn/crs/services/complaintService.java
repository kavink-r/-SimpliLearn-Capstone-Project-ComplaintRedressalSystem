package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Complaint;
import com.simplilearn.crs.entities.Customer;
import com.simplilearn.crs.entities.Ticket;
import com.simplilearn.crs.repository.complaintRepo;
import com.simplilearn.crs.repository.customerRepo;

@Service
public class complaintService {

	@Autowired
	complaintRepo repo;
	
	@Autowired
	customerRepo crepo;
	
	public List<Complaint> getAllComplaints(){
		return repo.findAll();
	}
	
	public Complaint createComplaint(Complaint cmp) {
		try {
			return repo.save(cmp);
			
		}catch(Exception e) {
			return null;
		}
	}
	
	public int addTicketToComplaint(Complaint cmp, Ticket tkt) {
		try {
			cmp.addTicket(tkt);
			repo.save(cmp);
			return 1;
		}catch(Exception e) {
			return 0;
		}
	}
	public List<Complaint> getAllCustomerComplaints(Long CustomerId){
		Customer cus = crepo.findById(CustomerId).get();
		return repo.findByCustomer(cus);
	}
	public Long addFeedback(Long cId, String feedback) {
		try {
			System.out.println("complaintid-->"+cId);
			System.out.println("Feedback--------->"+feedback);
		Complaint cmp =repo.findById(cId).get();
		cmp.setFeedback(feedback);
		repo.save(cmp);
		return 1L;
		}catch(Exception e) {
			System.out.println(e);
			return 0L;
		}
	}
}
