package com.simplilearn.crs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.crs.entities.Customer;
import com.simplilearn.crs.repository.customerRepo;

@Service
public class customerService {
	@Autowired
	customerRepo repo;

	public List<Customer> getAllCustomers() {
		return repo.findAll();
	}

	public int addCustomer(Customer cus) {
		try {
			repo.save(cus);
			return 1;
		} catch (Exception e) {
			return 0;
		}
	}
	
	public int deleteCustomer(Customer cus) {
		try {
			repo.delete(cus);
			return 1;
		}catch(Exception e) {
			return 0;
		}
	}
}
