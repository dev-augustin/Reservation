import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Review.css'

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            Review: "",
            Rating: "",
            reserve:[]
        }
      
    }

    async componentDidMount() {
 
        try{
                const response = await axios.get("/rosy_api/v1/reviews");
                console.log(response.data);
                this.setState({reserve: response.data, isLoading: false})
            }
    
        catch(e){
                console.log("Error", e)
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
    console.log(this.state.Review)
    event.preventDefault();
    let formData = {
        review : this.state.Review,
        rating : this.state.Rating,
       
    };
    this.postAPI(formData);
}

postAPI = async (formData) =>{
    console.log(formData)
    try{
            const response = await axios.post("/rosy_api/v1/reviews", formData
           
            );
            console.log(response.data);
            // this.props.history.push('/reviews/');
            // this.setState({reserve: response.data, isLoading: false})
        }

    catch(e){
            console.log("Error", e)
        }
    }
   render(){
    // const {reserve} = this.state;
       return(
        <React.Fragment>
<div className="form-div-review">
<form onSubmit={this.onSubmit} >
<label>
Review </label>
                    <input style={{height: '100px', marginTop: '15px'}}  type="text" name="Review" value={this.state.Review} onChange={this.onChange}/>            
                    <br/>
                    <label>
                    Rating </label>
                    <input type="text" name="Rating" value={this.state.Rating} onChange={this.onChange} placeholder="on scale of 1-5"/>            
                    <br/>
                    
                    <label >
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>
                   
                      
                    </div>
                    {/* <Button><Link to="/manageReservation"> clik</Link> /</Button> */}
                    <div className="review-container">           
            <Table  striped bordered hover size="sm" >
                <thead style={{backgroundColor: 'lightgray'}}>
                    <tr>
                        <th>Review</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>  {this.state.reserve.map((res) => <tr key={res.id}><td>
                        {res.review} </td>
                        <td>{res.rating}</td>
                        </tr>
                               )}
                                </tbody>
                  
            </Table>
                    </div>
  </React.Fragment>
        )
    }
}
