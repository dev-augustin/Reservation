import React from 'react'
import '../styles/Navigation.css'
import RainbowText from 'react-rainbow-text';
import {Navbar, Nav} from 'react-bootstrap'



export default function Navigation() {
    return (
        <div className="route-container">   
         {/* <div>
            <h1 id="hotel-name">
                <RainbowText lightness={0.5} saturation={1}> Rainbow Inn</RainbowText></h1>
         </div> */}
           {/* <Navbar bg="light">
    <Navbar.Brand href="#home">Brand Nav.Link</Navbar.Brand>
  </Navbar>
  <br /> */}
  <Navbar variant="light" className="nav-color" >
    <Navbar.Brand>
        <h1 id="hotel-name">
            <RainbowText lightness={0.5} saturation={1}> Rainbow Inn</RainbowText></h1>
    </Navbar.Brand>
    <Nav className="route-navBar">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/rooms">Rooms</Nav.Link>
      <Nav.Link href="/amenities">Amenities</Nav.Link>
      <Nav.Link href='/makeReservation'>Reserve Room</Nav.Link>
      <Nav.Link href='/manageReservation'>Manage Reservation</Nav.Link>
      <Nav.Link href='/reviews'>Guest Review</Nav.Link>
      <Nav.Link href='/thingsToDo'>Explore</Nav.Link>
      <Nav.Link href='/about'>About Us | Contact</Nav.Link>
      </Nav>
  </Navbar>
           {/* <div>
               <ul className="route-navBar">
                    <li><Nav.Link href='/'>Home</Nav.Link></li>
                    <li><Nav.Link href='/rooms'>Rooms</Nav.Link></li>
                    <li><Nav.Link href='/amenities'>Amenities</Nav.Link></li>
                    <li><Nav.Link href='/makeReservation'>Reserve Room</Nav.Link></li>
                    <li><Nav.Link href='/manageReservation'>Manage Reservation</Nav.Link></li> 
                    <li><Nav.Link href='/reviews'>Guest Review</Nav.Link></li>
                    <li><Nav.Link href='/thingshrefDo'>Explore</Nav.Link></li> 
                </ul> 
           </div> */}
        </div>
    )
}

