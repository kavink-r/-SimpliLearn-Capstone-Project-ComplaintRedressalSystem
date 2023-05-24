package com.simplilearn.crs.security;
import static org.springframework.security.config.Customizer.withDefaults;

import java.io.IOException;
import java.util.List;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Configuration
@EnableWebSecurity
public class SecurityConfig  {

	@Bean
	public SecurityFilterChain filterchain(HttpSecurity http) throws Exception {
		http
		.csrf((csrf)->csrf.disable())
        .authorizeHttpRequests((authorizeHttpRequests) ->
                authorizeHttpRequests
                     .requestMatchers("/api/home/","/api/home/add").permitAll()
                     .requestMatchers("/api/home/admin").hasAuthority("ADMIN")
                     .requestMatchers("/api/home/user").hasAnyAuthority("ADMIN","USER")
        )
        .authenticationProvider(authProvider())
        .sessionManagement((sessmgmt)->
        		sessmgmt
        			.sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
        			.maximumSessions(1)
        		)
        .logout((logout) ->
			logout.deleteCookies("JSESSIONID")
				.invalidateHttpSession(true)
				.logoutUrl("/logout")
				)
        .formLogin((login)->{
        	login.loginProcessingUrl("/auth")
        	.usernameParameter("username")
        	.passwordParameter("password")
        	.successHandler(successHandler())
        	.failureHandler(failureHandler());
        	
        });
        return http.build();
	}
	private AuthenticationSuccessHandler successHandler() {
	    return new AuthenticationSuccessHandler() {
	        

			@Override
			public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
					Authentication authentication) throws IOException, ServletException {
				
				Cookie authCookie = new Cookie("authentication","success");
				userSecurityObj usr = (userSecurityObj) authentication.getPrincipal();
				authCookie.setAttribute("username",usr.getUsername());
				authCookie.setAttribute("Roles", authentication.getAuthorities().toString());
				response.getWriter().append("OK");
				response.setStatus(200);
				response.addCookie(authCookie);
			}
	    };
	}

	private AuthenticationFailureHandler failureHandler() {
	    return new AuthenticationFailureHandler() {

			@Override
			public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
					AuthenticationException exception) throws IOException, ServletException {
			
				response.getWriter().append("Authentication failure");
	            response.setStatus(401);
			}
			};  
	       
	}
	@Bean
	public UserDetailsService userDetailsService() {
		return new CustomUserDetailsService();
	}
	
	@Bean
	public AuthenticationProvider authProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService());
		provider.setPasswordEncoder(encoder());
		return provider;
	}
	
	@Bean
	public PasswordEncoder encoder () {
		return new BCryptPasswordEncoder();
	}
	
	@Bean 
	public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
}
