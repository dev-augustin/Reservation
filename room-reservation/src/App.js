import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import MakeReservation from './components/MakeReservation'
import ManageReservation from './components/ManageReservation'
import EditReservation from './components/EditReservation'
import Reviews from './components/Reviews'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import ThingsToDo from './components/ThingsToDo'
import AboutUsContact from './components/AboutUsContact'

function App() {
  return (
    <Router>
         <div className="App">
            <Navigation />
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/makeReservation/' component={MakeReservation} />
              <Route exact path = '/manageReservation' component={ManageReservation} />
              <Route exact path = '/amenities' component={Amenities} />
              <Route exact path = '/reviews' component={Reviews} />
              <Route exact path = '/rooms' component={Rooms} />
              <Route exact path = '/thingsToDo' component={ThingsToDo} />
              {/* <Route exact path = '/search' component={Search} /> */}
              <Route  path = '/editReservation/:id' component={EditReservation} />
              <Route exact path = '/about' component={AboutUsContact} />
            </Switch>
         </div>
    </Router>
   
  );
}

export default App;
