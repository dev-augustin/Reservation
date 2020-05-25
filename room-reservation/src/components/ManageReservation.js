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
        <div>
            {this.state.reserve.map((res) => <ul><li>{res.firstName}</li>
            <li>{res.lastName} </li>
            <li>{res.id} </li>
            
            <Button><Link to={"/editReservation/" + res.id}> EditSe</Link> /</Button>
            {/* <Button
            onClick={() => this.edit(res.id)} >Edit User</Button> */}
            
            <Button onClick={() => this.remove(res.id)}> Delete</Button></ul>)}

        </div>
       );   
   }
}
