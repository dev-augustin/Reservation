package com.rosy.SpringBoot.reservationApp.model;



import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "room_reserve") 
public class RoomReservation {


@Id
@GeneratedValue
@Column(name = "cust_id")
private long id;


@Column(name = "first_name")
private String firstName;

@Column(name = "last_name")
private String lastName;

@Column(name = "email")
private String email;

@Column(name = "phone")
private long phone;

@Column(name = "arrival_date")
private String arrival_date;

@Column(name = "departure_date")
private String departure_date;

@Column(name = "no_of_adults")
private long no_of_adults;

@Column(name = "no_of_children")
private long no_of_children;

@Column(name = "questions")
private String questions;

@Column(name = "roomPreference")
private String roomPreference;

public RoomReservation() {
super();
}

public RoomReservation(String firstName, String lastName, String email, 
		String arrival_date, String departure_date, long no_of_adults, 
		long no_of_children, String questions, String roomPreference) {
super();
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.arrival_date = arrival_date;
this.departure_date = departure_date;
this.no_of_adults = no_of_adults;
this.no_of_children = no_of_children;
this.questions = questions;
this.roomPreference=roomPreference;
}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}


public String getfirstName() {
return firstName;
}

public void setfirstName(String firstName) {
this.firstName = firstName;
}

public String getlastName() {
return lastName;
}

public void setlastName(String lastName) {
this.lastName = lastName;
}


public String getEmail() {
return email;
}

public void setEmail(String email) {
this.email = email;
}

public long getPhone() {
return phone;
}

public void setPhone(long phone) {
this.phone = phone;
}

public String getArrivalDate() {
return arrival_date;
}

public void setArrivalDate(String arrival_date) {
this.arrival_date = arrival_date;
}

public String getDepartureDate() {
return departure_date;
}

public void setDepartureDate(String departure_date) {
this.departure_date = departure_date;
}

public long getNoOfAdults() {
return no_of_adults;
}

public void setNoOfAdults(long no_of_adults) {
this.no_of_adults = no_of_adults;
}

public long getNoOfChildren() {
return no_of_children;
}

public void setNoOfChildren(long no_of_children) {
this.no_of_children = no_of_children;
}

public String getQuestions() {
return questions;
}

public void setQuestions(String questions) {
this.questions = questions;
}

public String getRoomPreference() {
return roomPreference;
}

public void setRoomPreference(String roomPreference) {
this.roomPreference = roomPreference;
}

}