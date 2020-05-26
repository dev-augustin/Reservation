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
	  public List<GuestReviews> getAllReviews(Model model) {
	  	
	  return this.guestReviewRepository.findAll();
	  
	}
	  
	  
	//  get all reviews by id

	  @GetMapping("/reviews/{id}")
	  public ResponseEntity<GuestReviews> getReviewById(@PathVariable(value = "id") Long reviewId)
	      throws ResourceNotFoundException {
		  GuestReviews review = guestReviewRepository.findById(reviewId)
	        .orElseThrow(() -> new ResourceNotFoundException("Review not found for this id :: " + reviewId));
	      return ResponseEntity.ok().body(review);
	  }
	  
	//  save reviews
	  
	  @PostMapping("/reviews")
	  public GuestReviews createReview(@Valid @RequestBody GuestReviews review) {
		  return guestReviewRepository.save(review);
	  }
	  
	//  Update Review
	  
		  @PutMapping("/reviews/{id}")
		  public ResponseEntity<GuestReviews> updateReview(@PathVariable(value = "id") Long reviewId,
				  @Valid @RequestBody GuestReviews reviewDetails)
			      throws ResourceNotFoundException {
			  GuestReviews review = guestReviewRepository.findById(reviewId)
			    		  .orElseThrow(()-> new ResourceNotFoundException("Review not found for this id :: " + reviewId));
			      
			  review.setReview(reviewDetails.getReview()); 
			  review.setRating(reviewDetails.getRating());
			    	    
			     
			     final GuestReviews updatedReview = guestReviewRepository.save(review);
			     
			     
			     return ResponseEntity.ok(updatedReview);
			      
			      }
		  
		//  Delete Review
		  
		  @DeleteMapping("/reviews/{id}")
		  public Map<String, Boolean> deletedEmployee(@PathVariable(value = "id") Long reviewId)
					      throws ResourceNotFoundException {
			  GuestReviews review = guestReviewRepository.findById(reviewId)
					    		  .orElseThrow(()-> new ResourceNotFoundException("Review not found for this id :: " + reviewId));
		  
			              guestReviewRepository.delete(review);
					      Map<String, Boolean> response = new HashMap<>();
					      
					      response.put("deleted review", Boolean.TRUE);
					      
					      return response;
		  
		  }
		  
		  
}













