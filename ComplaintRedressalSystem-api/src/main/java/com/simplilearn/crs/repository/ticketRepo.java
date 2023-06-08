package com.simplilearn.crs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.crs.entities.Engineer;
import com.simplilearn.crs.entities.Manager;
import com.simplilearn.crs.entities.Ticket;

@Repository
public interface ticketRepo extends JpaRepository<Ticket, Long> {

	public List<Ticket> findByEngineer(Engineer engineer);
	@Query("Select t from com.simplilearn.crs.entities.Ticket t where t.engineer=:engineer and not t.status ='CLOSED'")
	public List<Ticket> findByEngineerOpen(Engineer engineer);
	public List<Ticket> findByManager(Manager manager);
	@Query("Select t from com.simplilearn.crs.entities.Ticket t where t.manager=:manager and not t.status ='CLOSED'")
	public List<Ticket> findByManagerOpen(Manager manager);
}
