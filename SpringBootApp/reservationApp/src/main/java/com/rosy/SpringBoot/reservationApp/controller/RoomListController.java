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
	  
	//  get all rooms
	  

	  @GetMapping("/room_list")
	  public List<RoomList> getAllRoomList(Model model) {
	  	
	  return this.roomListRepository.findAll();
	  
	}
	  
	  
	//  get all rooms by id

	  @GetMapping("/room_list/{id}")
	  public ResponseEntity<RoomList> getRoomById(@PathVariable(value = "id") Long roomId)
	      throws ResourceNotFoundException {
		  RoomList room = roomListRepository.findById(roomId)
	        .orElseThrow(() -> new ResourceNotFoundException("Room not found for this id :: " + roomId));
	      return ResponseEntity.ok().body(room);
	  }
	  
	//  save Rooms
	  
	  @PostMapping("/room_list")
	  public RoomList createRoom(@Valid @RequestBody  RoomList room) {
		  return roomListRepository.save(room);
	  }
	  
	//  Update Rooms
	  
	  @PutMapping("/room_list/{id}")
	  public ResponseEntity<RoomList> updateEmployee(@PathVariable(value = "id") Long roomId,
			  @Valid @RequestBody RoomList roomDetails)
		      throws ResourceNotFoundException {
		  RoomList room = roomListRepository.findById(roomId)
		    		  .orElseThrow(()-> new ResourceNotFoundException("Room not found for this id :: " + roomId));
		      
		     
		  room.setRoomType(roomDetails.getRoomType()); 
		  room.setPrice(roomDetails.getPrice());
		  room.setAmenities(roomDetails.getAmenities());
		  room.setRoomImage(roomDetails.getRoomImage()); 	    
		     
		     final RoomList updatedEmployee = roomListRepository.save(room);
		     
		     
		     return ResponseEntity.ok(updatedEmployee);
		      
		      }
	  
	//  Delete room
	  
	  @DeleteMapping("/room_list/{id}")
	  public Map<String, Boolean> deletedRoom(@PathVariable(value = "id") Long roomId)
				      throws ResourceNotFoundException {
		  RoomList room = roomListRepository.findById(roomId)
				    		  .orElseThrow(()-> new ResourceNotFoundException("Room not found for this id :: " + roomId));
	  
		  			  roomListRepository.delete(room);
				      Map<String, Boolean> response = new HashMap<>();
				      
				      response.put("deleted room", Boolean.TRUE);
				      
				      return response;
	  
	  }
	  
	  
	}







