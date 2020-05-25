package com.rosy.SpringBoot.reservationApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rosy.SpringBoot.reservationApp.model.RoomReservation;

@Repository
public interface RoomReservationRepository extends JpaRepository<RoomReservation, Long>{

}
//
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.niecey.SpringBootDemo.mySpringBootApp.model.Employee;
//
//@Repository
//
//public interface EmployeeRepository extends JpaRepository<Employee, Long>{
//
//
//
//}
