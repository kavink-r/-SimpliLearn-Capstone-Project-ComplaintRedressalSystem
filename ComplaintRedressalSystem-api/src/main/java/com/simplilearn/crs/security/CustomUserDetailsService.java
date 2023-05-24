package com.simplilearn.crs.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.simplilearn.crs.entities.Users;
import com.simplilearn.crs.repository.usersRepo;
@Component
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
	usersRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users usr = repo.findByUsername(username);
		userSecurityObj securityUser = new userSecurityObj(usr);
		return securityUser;
	}

}
