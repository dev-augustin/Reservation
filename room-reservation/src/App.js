import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/rooms' exact={true} component={Rooms}/>
          <Route path='/amenities' exact={true} component={Amenities}/>
          <Route path='/makeReservation' exact={true} component={MakeReservation}/>
          <Route path='/guestReview' exact={true} component={GuestReview}/>
        </Switch>

      </Router>
    );
  }
}

export default App;
