package com.rosy.SpringBoot.reservationApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rosy.SpringBoot.reservationApp.exception.ResourceNotFoundException;
import com.rosy.SpringBoot.reservationApp.model.GuestReviews;
import com.rosy.SpringBoot.reservationApp.repository.GuestReviewRepository;

@RestController
@RequestMapping("/rosy_api/v1")

public class GuestReviewController {
	
	  @Autowired
	  private GuestReviewRepository guestReviewRepository;
	  
	//  get all reviews
	  

	  @GetMapping("/reviews")
	  public List<GuestReviews> getAllEmployees(Model model) {
	  	
	  return this.guestReviewRepository.findAll();
	  
	}
	  
	  
	//  get all reviews by id

	  @GetMapping("/reviews/{id}")
	  public ResponseEntity<GuestReviews> getEmployeeById(@PathVariable(value = "id") Long employeeId)
	      throws ResourceNotFoundException {
		  GuestReviews employee = guestReviewRepository.findById(employeeId)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	      return ResponseEntity.ok().body(employee);
	  }
	  
	//  save reviews
	  
	  @PostMapping("/reviews")
	  public GuestReviews createEmployee(@Valid @RequestBody GuestReviews employee) {
		  return guestReviewRepository.save(employee);
	  }
	  
	//  Update Employee
	  
		  @PutMapping("/reviews/{id}")
		  public ResponseEntity<GuestReviews> updateEmployee(@PathVariable(value = "id") Long employeeId,
				  @Valid @RequestBody GuestReviews employeeDetails)
			      throws ResourceNotFoundException {
			  GuestReviews employee = guestReviewRepository.findById(employeeId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
			      
			     
			     employee.setReview(employeeDetails.getReview()); 
			     employee.setRating(employeeDetails.getRating());
			    	    
			     
			     final GuestReviews updatedEmployee = guestReviewRepository.save(employee);
			     
			     
			     return ResponseEntity.ok(updatedEmployee);
			      
			      }
		  
		//  Delete Employee
		  
		  @DeleteMapping("/reviews/{id}")
		  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long employeeId)
					      throws ResourceNotFoundException {
			  GuestReviews employee = guestReviewRepository.findById(employeeId)
					    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
		  
			              guestReviewRepository.delete(employee);
					      Map<String, Boolean> response = new HashMap<>();
					      
					      response.put("deleted employee", Boolean.TRUE);
					      
					      return response;
		  
		  }
		  
		  
}













