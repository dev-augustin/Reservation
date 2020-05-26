import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ManageReservation.css'


export default class ManageReservation extends Component {

  constructor(props) {
    super(props);
    this.state = {reserve: [], isLoading: true};
    //this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
 
    try{
            const response = await axios.get("/rosy_api/v1/reserve");
            console.log(response.data);
            this.setState({reserve: response.data, isLoading: false})
        }

    catch(e){
            console.log("Error", e)
        }
    }

    async remove(id) {
 
      try{
              const response = await axios.delete(`/rosy_api/v1/reserve/${id}`);
              console.log(response.data);
              let update = this.state.reserve.filter(i => i.id !== id);
              this.setState({reserve: update})
          }
  
      catch(e){
              console.log("Error", e)
          }
      }


      // edit(id){
      //   console.log(id)
      //   // window.localStorage.setItem("userId", id);
      //   this.props.history.push(`/editReservation/${id}`);
      // }
      // async edit(id) {
 
      //   try{
      //           const response = await axios.put(`/rosy_api/v1/reserve/${id}`);
      //           console.log(response.data);
      //           let update = this.state.reserve.filter(i => i.id !== id);
      //           this.setState({reserve: update})
      //       }
    
      //   catch(e){
      //           console.log("Error", e)
      //       }
      //   }
   render(){
    const {reserve} = this.state; 
       return(
        <div className="manage-container">           
            <Table  striped bordered hover size="sm" style={{backgroundColor: 'lightgray'}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Room Type</th>
                        <th>No.of Adults</th>
                        <th>No.of Children</th>
                        <th>ArrivalDate</th>
                        <th>DepartureDate</th>
                        <th>Questions</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.reserve.map((res) => 
                    <tr key={res.id}>
                    <td>{res.firstName}</td>
                    <td>{res.lastName}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.roomPreference}</td>
                    <td>{res.noOfAdults}</td>
                    <td>{res.noOfChildren}</td>
                    <td>{res.arrivalDate}</td>
                    <td>{res.departureDate}</td>
                    <td>{res.questions}</td>
                    <td> <Link to={"/editReservation/" + res.id}> <Button>Edit</Button></Link></td>
                    <td>    
                    <Button onClick={() => this.remove(res.id)}> Delete</Button></td>
                    </tr>  )}
                </tbody>
            </Table>
          
            
        
            
       
            {/* {this.state.reserve.map((res) => <ul><li>{res.firstName}</li>
            <li>{res.lastName} </li>
            <li>{res.id} </li>
            
            <Button><Link to={"/editReservation/" + res.id}> EditSe</Link> /</Button>
  
            
            <Button onClick={() => this.remove(res.id)}> Delete</Button></ul>)} */}

        </div>
       );   
   }
}


          {/* <Button
            onClick={() => this.edit(res.id)} >Edit User</Button> */}