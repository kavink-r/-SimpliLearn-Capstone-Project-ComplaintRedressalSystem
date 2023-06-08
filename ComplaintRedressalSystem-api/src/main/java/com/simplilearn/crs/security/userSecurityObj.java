package com.simplilearn.crs.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.simplilearn.crs.entities.Users;

public class userSecurityObj implements UserDetails{
	private Users usr;
	userSecurityObj(Users usr){
		this.usr =usr;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		String[] role = usr.getRoles().split(",");
		List<GrantedAuthority> authorities = Arrays.stream(role).map(SimpleGrantedAuthority::new).collect(Collectors.toList());
		System.out.println(authorities);
		return authorities;
	}

	@Override
	public String getPassword() {
		return usr.getPassword();
	}

	@Override
	public String getUsername() {
		return usr.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return usr.isAccountStatus();
	}

	@Override
	public boolean isAccountNonLocked() {
		return usr.isAccountStatus();
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return usr.isAccountStatus();
	}

	@Override
	public boolean isEnabled() {
		return usr.isAccountStatus();
	}
	

}
