import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Lable, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'


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

<form onSubmit={this.onSubmit} >
                   <label>
                       First Name:  </label>
                       <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                       Last Name:  </label>
                       <input type="text" name="LastName" value={this.state.LastName} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                        Email:  </label>
                        <input type="text" name="Email" value={this.state.Email} onChange={this.onChange} />          
                    <br/>
                    <label>
                        Phone:  </label>
                        <input type="text" name="Phone" value={this.state.Phone} onChange={this.onChange} />
                    <br/>
                    <label>
                    Room Type:  </label>
                        <input type="text" name="RoomType" value={this.state.RoomType} onChange={this.onChange} />          
                    <br/>
                    <label>
                        No of Adults:  </label>
                        <input type="text" name="Adults" value={this.state.Adults} onChange={this.onChange} />
                    <br/>
                    <label>
                    No of Kids: :  </label>
                        <input type="text" name="Kids" value={this.state.Kids} onChange={this.onChange} />          
                    <br/>
                    <label>
                        Arrival Date:  </label>
                        <input type="text" name="ArrivalDate" value={this.state.ArrivalDate} onChange={this.onChange} />
                    <br/>
                    <label>
                        Deparature Date:  </label>
                        <input type="text" name="DeparatureDate" value={this.state.DeparatureDate} onChange={this.onChange} />
                    <br/>
                    <label>
                        Questions/Concerns:  </label>
                        <input type="text" name="Questions" value={this.state.Questions} onChange={this.onChange} />
                    <br/>
                    <label>
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>

                    <Button><Link to="/manageReservation"> clik</Link> /</Button>

           
  </React.Fragment>
           
    
       );   
   }
}
