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
		System.out.println("Finding by username ----->"+username);
		if(username!=null && username!="") {
		Users usr = repo.findByUsername(username);
		
		if(usr!=null) {
		userSecurityObj securityUser = new userSecurityObj(usr);
		System.out.println("Created user----------->"+securityUser);
		return securityUser;
		}else {
			System.out.println("User not Found!!");
			throw new UsernameNotFoundException("User not present!");
		}
		}else {
			System.out.println("Username not Found!!");
			throw new UsernameNotFoundException("Username not present!");
		}
	}

}
