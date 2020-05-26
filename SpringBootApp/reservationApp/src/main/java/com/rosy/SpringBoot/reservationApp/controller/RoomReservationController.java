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

    
//  get all reserved rooms
  

  @GetMapping("/reserve")
  public List<RoomReservation> getAllEmployees(Model model) {
  	
  return this.reservationRepository.findAll();
  
}


    
//  get all reserved rooms by id

  @GetMapping("/reserve/{id}")
  public ResponseEntity<RoomReservation> getEmployeeById(@PathVariable(value = "id") Long reservedRoomId)
      throws ResourceNotFoundException {
	  RoomReservation reserveRoom = reservationRepository.findById(reservedRoomId)
        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
      return ResponseEntity.ok().body(reserveRoom);
  }
  
//  save reserved rooms
  
  @PostMapping("/reserve")
  public RoomReservation createReservation(@Valid @RequestBody RoomReservation reserveRoom) {
	  return reservationRepository.save(reserveRoom);
  }
  
//  Update reserved rooms
  
  @PutMapping("/reserve/{id}")
  public ResponseEntity<RoomReservation> updateReservation(@PathVariable(value = "id") Long reservedRoomId,
		  @Valid @RequestBody RoomReservation reservedRoomDetails)
	      throws ResourceNotFoundException {
	  RoomReservation reserveRoom = reservationRepository.findById(reservedRoomId)
	    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
	      
	     
	  reserveRoom.setEmail(reservedRoomDetails.getEmail()); 
	  reserveRoom.setfirstName(reservedRoomDetails.getfirstName());
	  reserveRoom.setlastName(reservedRoomDetails.getlastName());
	  reserveRoom.setPhone(reservedRoomDetails.getPhone()); 
	  reserveRoom.setArrivalDate(reservedRoomDetails.getArrivalDate());
	  reserveRoom.setDepartureDate(reservedRoomDetails.getDepartureDate());
	  reserveRoom.setNoOfAdults(reservedRoomDetails.getNoOfAdults()); 
	  reserveRoom.setNoOfChildren(reservedRoomDetails.getNoOfChildren()); 
	  reserveRoom.setQuestions(reservedRoomDetails.getQuestions()); 
	  reserveRoom.setRoomPreference(reservedRoomDetails.getRoomPreference());
	     
	     
	     final RoomReservation updatedEmployee = reservationRepository.save(reserveRoom);
	     
	     
	     return ResponseEntity.ok(updatedEmployee);
	      
	      }
  
//  Delete reserved rooms
  
  @DeleteMapping("/reserve/{id}")
  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long reservedRoomId)
			      throws ResourceNotFoundException {
	  RoomReservation employee = reservationRepository.findById(reservedRoomId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("Employee not found for this id :: " + reservedRoomId));
  
			      reservationRepository.delete(employee);
			      Map<String, Boolean> response = new HashMap<>();
			      
			      response.put("deleted reserved room", Boolean.TRUE);
			      
			      return response;
  
  }
  
  
}

