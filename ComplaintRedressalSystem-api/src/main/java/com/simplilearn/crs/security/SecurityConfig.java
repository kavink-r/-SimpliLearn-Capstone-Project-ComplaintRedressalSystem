package com.simplilearn.crs.security;
import static org.springframework.security.config.Customizer.withDefaults;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
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
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig  {

	@Bean
	public SecurityFilterChain filterchain(HttpSecurity http) throws Exception {
		http
		.csrf((csrf)->csrf.disable())
		.cors(cors -> {
		    cors.configurationSource(request -> {
		      CorsConfiguration corsConfiguration = new CorsConfiguration();
		      corsConfiguration.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
		      corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT","PATCH", "DELETE"));
		      corsConfiguration.setAllowedHeaders(Collections.singletonList("*"));
		      corsConfiguration.setAllowCredentials(true);
		      return corsConfiguration;
		    });
		  })
		 .authorizeHttpRequests((authorize) -> authorize
			        .anyRequest().authenticated()
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
	    		userSecurityObj usr = (userSecurityObj) authentication.getPrincipal();  		
	    		// Serialize the roles as a string
	    		String roles = authentication.getAuthorities().toString();
 	    		response.getWriter().append("{\"authentication\":\""+usr.getUsername()+ "\","
 	    				+"\"roles\":\""+roles+"\""
 	    				+ "}");
	    		response.setStatus(HttpServletResponse.SC_OK);
	    		
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
