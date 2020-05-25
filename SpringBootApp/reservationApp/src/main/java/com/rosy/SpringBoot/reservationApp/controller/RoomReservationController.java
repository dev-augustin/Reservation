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
import com.rosy.SpringBoot.reservationApp.model.RoomReservation;
import com.rosy.SpringBoot.reservationApp.repository.RoomReservationRepository;

@RestController
@RequestMapping("/rosy_api/v1")

public class RoomReservationController {


	
  @Autowired
  private RoomReservationRepository reservationRepository;

    
//  get all employees
  

  @GetMapping("/reserve")
  public List<RoomReservation> getAllEmployees(Model model) {
  	
  return this.reservationRepository.findAll();
  
}


    
//  get all employees by id

  @GetMapping("/reserve/{id}")
  public ResponseEntity<RoomReservation> getEmployeeById(@PathVariable(value = "id") Long employeeId)
      throws ResourceNotFoundException {
	  RoomReservation employee = reservationRepository.findById(employeeId)
        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
      return ResponseEntity.ok().body(employee);
  }
  
//  save employee
  
  @PostMapping("/reserve")
  public RoomReservation createEmployee(@Valid @RequestBody RoomReservation employee) {
	  return reservationRepository.save(employee);
  }
  
//  Update Employee
  
  @PutMapping("/reserve/{id}")
  public ResponseEntity<RoomReservation> updateEmployee(@PathVariable(value = "id") Long employeeId,
		  @Valid @RequestBody RoomReservation employeeDetails)
	      throws ResourceNotFoundException {
	  RoomReservation employee = reservationRepository.findById(employeeId)
	    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	      
	     
	     employee.setEmail(employeeDetails.getEmail()); 
	     employee.setfirstName(employeeDetails.getfirstName());
	     employee.setlastName(employeeDetails.getlastName());
	     employee.setPhone(employeeDetails.getPhone()); 
	     employee.setArrivalDate(employeeDetails.getArrivalDate());
	     employee.setDepartureDate(employeeDetails.getDepartureDate());
	     employee.setNoOfAdults(employeeDetails.getNoOfAdults()); 
	     employee.setNoOfChildren(employeeDetails.getNoOfChildren()); 
	     employee.setQuestions(employeeDetails.getQuestions()); 
	     
	     
	     final RoomReservation updatedEmployee = reservationRepository.save(employee);
	     
	     
	     return ResponseEntity.ok(updatedEmployee);
	      
	      }
  
//  Delete Employee
  
  @DeleteMapping("/reserve/{id}")
  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long employeeId)
			      throws ResourceNotFoundException {
	  RoomReservation employee = reservationRepository.findById(employeeId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
  
			      reservationRepository.delete(employee);
			      Map<String, Boolean> response = new HashMap<>();
			      
			      response.put("deleted employee", Boolean.TRUE);
			      
			      return response;
  
  }
  
  
}

