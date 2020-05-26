import React from 'react'
import homeImg from '../assets/background.jpeg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <img src = {homeImg} alt="home page" className="home-image" />
            <h1 id="welcome-header">Best Value under the Sun <br/>
            <Link to='/rooms'> <Button variant="primary" id="view-room-button"> View our Rooms</Button></Link></h1>
            
        </div>
    )
}
