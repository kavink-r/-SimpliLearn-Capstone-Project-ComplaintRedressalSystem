package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Complaint;
import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.Ticket;
import com.simplilearn.crs.repository.engineerRepo;
import com.simplilearn.crs.repository.managerRepo;
import com.simplilearn.crs.repository.ticketRepo;

@Service
public class ticketService {
@Autowired
ticketRepo repo;

@Autowired
engineerRepo erepo;

@Autowired
managerRepo mrepo;

public List<Ticket> getAllTickets(){
	return repo.findAll();
}

public Ticket createTicket(Ticket tkt) {
	return repo.save(tkt);
}

public int setComplaint(Ticket tkt,Complaint cmp) {
	try {
		tkt.setComplaint(cmp);
		repo.save(tkt);
		return 1;
	}catch(Exception e) {
		return 0;
	}
}
public Ticket getTicket(Long Id) {
	return repo.findById(Id).get();
}
public Long updateStatus(Long id, String Status) {
	try {
	Ticket tkt = repo.findById(id).get();
	tkt.setStatus(Status);
	repo.save(tkt);
	return 1L;
	}catch(Exception e) {
		return 0L;
	}
	
}
public Long updateComment(Long id, String Comment) {
	try {
	Ticket tkt = repo.findById(id).get();
	tkt.setComment(Comment);
	repo.save(tkt);
	return 1L;
	}catch(Exception e) {
		return 0L;
	}
	
}
public Long assignEngineer(Ticket tkt) {
	try {
		Ticket tk = repo.findById(tkt.getTicketId()).get();
		Engineer eng = erepo.findById(tkt.getEngineer().getUserid()).get();
		tk.setEngineer(eng);
		tk.setStatus("ASSIGNED");
		repo.save(tk);
		return 1L;
	}catch(Exception e) {
		System.out.println(e);
		return 0L;
	}
}
public List<Ticket> getEngTickets(Long engineerId){
	Engineer engineer = erepo.findById(engineerId).get();
	return repo.findByEngineer(engineer);
}
public List<Ticket> getEngOpenTickets(Long engineerId){
	Engineer engineer = erepo.findById(engineerId).get();
	return repo.findByEngineerOpen(engineer);
}
public List<Ticket> getManagerTickets(Long managerId){
	Manager manager = mrepo.findById(managerId).get();
	return repo.findByManager(manager);
}
public List<Ticket> getManagerOpenTickets(Long managerId){
	Manager manager = mrepo.findById(managerId).get();
	return repo.findByManagerOpen(manager);
}
public Long assignManager(Ticket tkt) {
	try {
		Manager m = mrepo.findById(tkt.getManager().getUserid()).get();
		Ticket t = repo.findById(tkt.getTicketId()).get();
		t.setManager(m);
		repo.save(t);
		return 1L;
	} catch (Exception e) {
		e.printStackTrace();
		return 0L;
	}
}

}
