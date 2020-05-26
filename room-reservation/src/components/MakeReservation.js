import React, { Component } from 'react';
import { Button, Form, Col, FormGroup, Input, Label, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/MakeReservation.css'


export default class MakeReservation extends Component {

  constructor(props) {
    super(props);
    this.state ={
        reserve: [],
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Adults: "",
        Kids: "",
        RoomType: "",
        ArrivalDate: "",
        DeparatureDate:"",
        Questions:""
    }
  }
  onChange = (event) =>{
    event.preventDefault();
    console.log("Onchange", event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    });
}


onSubmit=(event) =>{
    event.preventDefault();
    let formData = {
        firstName : this.state.FirstName,
        lastName : this.state.LastName,
        email : this.state.Email,
        phone : this.state.Phone,
        roomPreference : this.state.RoomType,
        noOfAdults : this.state.Adults,
        noOfChildren : this.state.Kids,
        arrivalDate : this.state.ArrivalDate,
        departureDate : this.state.DeparatureDate,
        questions : this.state.Questions
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("/rosy_api/v1/reserve", formData
           
            );
            console.log(response.data);
            this.setState({reserve: response.data, isLoading: false}) 
            this.props.history.push('/manageReservation/');
        }

    catch(e){
            console.log("Error", e)
        }

       // this.props.history.push('/manageReservation/');
    }
   render(){
    // const {reserve} = this.state;
       return(
        <React.Fragment>

  <div className="form-div">

  {/* <Form>
  <Form.Row>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  </Form> */}
  <form onSubmit={this.onSubmit} >
                   <label style={{ marginTop: '40px'}} >
                       First Name:  </label> 
                       <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChange} placeholder="Enter your first name" ></input>            
                    <br/>
                    <label>
                       Last Name:  </label>
                       <input type="text" name="LastName" value={this.state.LastName} onChange={this.onChange} placeholder="Enter your last name" ></input>            
                    <br/>
                    <label>
                        Email:  </label>
                        <input type="text" name="Email" value={this.state.Email} onChange={this.onChange} placeholder="valid email"  />          
                    <br/>
                    <label>
                        Phone:  </label>
                        <input type="text" name="Phone" value={this.state.Phone} onChange={this.onChange} placeholder="(000-000-0000)" />
                    <br/>
                    <label>
                    Room Type:  </label>
                        <input type="text" name="RoomType" value={this.state.RoomType} onChange={this.onChange} placeholder="Queen/King/Single/Double Beds" />          
                    <br/>
                    <label>
                        No of Adults:  </label>
                        <input type="text" name="Adults" value={this.state.Adults} onChange={this.onChange} placeholder="number only" />
                    <br/>
                    <label>
                    No of Kids:  </label>
                        <input type="text" name="Kids" value={this.state.Kids} onChange={this.onChange} placeholder="number only"  />          
                    <br/>
                    <label>
                        Arrival Date:  </label>
                        <input type="text" name="ArrivalDate" value={this.state.ArrivalDate} onChange={this.onChange} placeholder="format DD/MM/YYY" />
                    <br/>
                    <label>
                        Deparature Date:  </label>
                        <input type="text" name="DeparatureDate" value={this.state.DeparatureDate} onChange={this.onChange} placeholder="format DD/MM/YYY" />
                    <br/>
                    <label>
                        Questions/Concerns:  </label>
                        <input id="text-area" type="text" name="Questions" value={this.state.Questions} onChange={this.onChange} placeholder="questions/concerns" />
                    <br/>
                    <label id="reserve-submit">
                        <input type="submit" style={{width: '200px', marginTop: '10px', marginLeft:'80px'}} value="Sumbit Reservation" />
                    </label>  
                    </form>

                    <p style={{fontFamily: 'cursive'}}>(You have 24hrs before your arrival date to confirm your Reservation. Our reservation agent will contact within 1 hr)</p>

                    {/* <Link to="/manageReservation"> Go to Manage you Reservation</Link>  */}

           
  </div>
  </React.Fragment>
           
    
       );   
   }
}
