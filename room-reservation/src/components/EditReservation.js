import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Lable, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/MakeReservation.css'


export default class EditReservation extends Component {

  constructor(props) {
    super(props);
    this.state ={
        id: this.props.match.params.id,
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


  async componentDidMount() {
 
    try{
            const response = await axios.get("/rosy_api/v1/reserve/"+this.props.match.params.id)
            console.log(response.data);
            this.setState({FirstName: response.data.firstName,
                LastName: response.data.lastName,
                Email: response.data.email,
                Phone: response.data.phone,
                Adults: response.data.noOfAdults,
                Kids: response.data.noOfChildren,
                RoomType: response.data.roomPreference,
                ArrivalDate: response.data.arrivalDate,
                Questions: response.data.questions,
                DepartureDate: response.data.departureDate,

            })
        }

    catch(e){
            console.log("Error", e)
        }
    }

//   loadUser() {
//     ApiService.fetchUserById(window.localStorage.getItem("userId"))
//         .then((res) => {
//             let user = res.data.result;
//             this.setState({
//             id: user.id,
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             age: user.age,
//             salary: user.salary,
//             })
//         });
// }
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
        departureDate : this.state.DepartureDate,
        questions : this.state.Questions
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.put("/rosy_api/v1/reserve/"+this.props.match.params.id, formData
           
            );
            console.log(response.data);
            // this.setState({reserve: response.data, isLoading: false})
            this.props.history.push('/manageReservation/');
        }

    catch(e){
            console.log("Error", e)
        }

        // this.props.history.push('/manageReservation/');
    }
   render(){
    // const {reserve} = this.state;
    console.log(this.state.id)
       return(
        <React.Fragment>

<form className="form-div" onSubmit={this.onSubmit} style={{marginTop:'100px'}} >
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
                        <input type="text" name="DeparatureDate" value={this.state.DepartureDate} onChange={this.onChange} />
                    <br/>
                    <label>
                        Questions/Concerns:  </label>
                        <input type="text" name="Questions" value={this.state.Questions} onChange={this.onChange} />
                    <br/>
                    <label>
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>

                    {/* <Button><Link to="/manageReservation"> clik</Link> /</Button> */}

           
  </React.Fragment>
           
    
       );   
   }
}
