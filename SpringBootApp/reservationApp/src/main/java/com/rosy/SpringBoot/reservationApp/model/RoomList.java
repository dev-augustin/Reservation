package com.rosy.SpringBoot.reservationApp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "room_list") 
public class RoomList {


@Id
@GeneratedValue
@Column(name = "room_id")
private long id;


@Column(name = "room_type")
private String roomType;

@Column(name = "price")
private String price;

@Column(name = "amenities")
private String amenities;

@Column(name = "room_image")
private String roomImage;


public RoomList() {
super();
}

public RoomList(String roomType, String price, String amenities, String roomImage) {
super();
this.roomType = roomType;
this.price = price;
this.amenities = amenities;
this.roomImage = roomImage;
}

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}


public String getRoomType() {
return roomType;
}

public void setRoomType(String roomType) {
this.roomType = roomType;
}

public String getPrice() {
return price;
}

public void setPrice(String price) {
this.price = price;
}


public String getAmenities() {
return amenities;
}

public void setAmenities(String amenities) {
this.amenities = amenities;
}

public String getRoomImage() {
return roomImage;
}

public void setRoomImage(String roomImage) {
this.roomImage = roomImage;
}


}