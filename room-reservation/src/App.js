import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import MakeReservation from './components/MakeReservation'
import ManageReservation from './components/ManageReservation'
import Reviews from './components/Reviews'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'


function App() {
  return (
    <Router>
         <div className="App">
            <Navigation />
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/makeReservation' component={MakeReservation} />
              <Route exact path = '/manageReservation' component={ManageReservation} />
              <Route exact path = '/amenities' component={Amenities} />
              <Route exact path = '/reviews' component={Reviews} />
              <Route exact path = '/rooms' component={Rooms} />
            </Switch>
         </div>
    </Router>
   
  );
}

export default App;
