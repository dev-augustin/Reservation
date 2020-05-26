import React from 'react'
import homeImg from '../assets/background.jpeg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <img src = {homeImg} alt="home page" className="home-image" />
            <h1 id="welcome-header"><br/>
            <Link to='/rooms'> <Button variant="outline-info" id="view-room-button"> Welcome to Rainbow Inn</Button></Link></h1>
            
        </div>
    )
}
