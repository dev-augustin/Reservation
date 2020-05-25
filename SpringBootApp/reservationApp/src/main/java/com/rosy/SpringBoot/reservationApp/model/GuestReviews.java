package com.rosy.SpringBoot.reservationApp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "reviews") 

public class GuestReviews {


@Id
@GeneratedValue
@Column(name = "review_id")
private long id;


@Column(name = "review")
private String review;


@Column(name = "rating")
private long rating;

public GuestReviews() {
super();
}

public GuestReviews(String review) {
super();
this.review = review;
}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}

public String getReview() {
return review;
}

public void setReview(String review) {
this.review = review;
}

public long getRating() {
return rating;
}

public void setRating(long rating) {
this.rating = rating;
}

}