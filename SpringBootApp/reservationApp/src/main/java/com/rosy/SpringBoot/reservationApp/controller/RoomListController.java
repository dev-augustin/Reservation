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
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rosy.SpringBoot.reservationApp.exception.ResourceNotFoundException;
import com.rosy.SpringBoot.reservationApp.model.RoomList;
import com.rosy.SpringBoot.reservationApp.repository.RoomListRepository;

@RestController
@RequestMapping("/rosy_api/v1")

public class RoomListController {
	
	  @Autowired
	  private  RoomListRepository roomListRepository;
	  
	//  get all reviews
	  

	  @GetMapping("/room_list")
	  public List<RoomList> getAllRoomList(Model model) {
	  	
	  return this.roomListRepository.findAll();
	  
	}
	  
	  
	//  get all reviews by id

	  @GetMapping("/room_list/{id}")
	  public ResponseEntity<RoomList> getEmployeeById(@PathVariable(value = "id") Long employeeId)
	      throws ResourceNotFoundException {
		  RoomList employee = roomListRepository.findById(employeeId)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	      return ResponseEntity.ok().body(employee);
	  }
	  
	//  save reviews
	  
	  @PostMapping("/room_list")
	  public RoomList createEmployee(@Valid @RequestBody  RoomList employee) {
		  return roomListRepository.save(employee);
	  }
	  
	//  Update Employee
	  
	  @PutMapping("/room_list/{id}")
	  public ResponseEntity<RoomList> updateEmployee(@PathVariable(value = "id") Long employeeId,
			  @Valid @RequestBody RoomList employeeDetails)
		      throws ResourceNotFoundException {
		  RoomList employee = roomListRepository.findById(employeeId)
		    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
		      
		     
		     employee.setRoomType(employeeDetails.getRoomType()); 
		     employee.setPrice(employeeDetails.getPrice());
		     employee.setAmenities(employeeDetails.getAmenities());
		     employee.setRoomImage(employeeDetails.getRoomImage()); 	    
		     
		     final RoomList updatedEmployee = roomListRepository.save(employee);
		     
		     
		     return ResponseEntity.ok(updatedEmployee);
		      
		      }
	  
	//  Delete Employee
	  
	  @DeleteMapping("/room_list/{id}")
	  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long employeeId)
				      throws ResourceNotFoundException {
		  RoomList employee = roomListRepository.findById(employeeId)
				    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	  
		  			  roomListRepository.delete(employee);
				      Map<String, Boolean> response = new HashMap<>();
				      
				      response.put("deleted employee", Boolean.TRUE);
				      
				      return response;
	  
	  }
	  
	  
	}







