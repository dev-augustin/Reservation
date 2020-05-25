package com.rosy.SpringBoot.reservationApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rosy.SpringBoot.reservationApp.model.RoomList;

@Repository
public interface RoomListRepository extends JpaRepository<RoomList, Long>{

}


