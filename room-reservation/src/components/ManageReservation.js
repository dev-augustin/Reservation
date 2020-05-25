import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'


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
   render(){
    const {reserve} = this.state; 
       return(
        <div>
            {this.state.reserve.map((res) => <ul><li>{res.firstName}</li>
            <li>{res.lastName} </li><Button>Edit</Button><Button>Delete</Button></ul>)}

        </div>
       );   
   }
}
