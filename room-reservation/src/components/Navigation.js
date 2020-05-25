import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'

export default function Navigation() {
    return (
        <div className="route-container">   
           <ul className="route-navBar">
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/makeReservation'>Make Reservation</Link></li>
               <li><Link to='/amenities'>Amenities</Link></li>
               <li><Link to='/rooms'>Rooms</Link></li>
               <li><Link to='/reviews'>Guest Review</Link></li>
               <li><Link to='/manageReservation'>Manage Reservation</Link></li> 
               <li><Link to='/thingsToDo'>Explore</Link></li> 
           </ul> 
        </div>
    )
}
 /* <li><Link to='/manageReservation'>Manage Reservation</Link></li> */