import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state ={
            reviews: [],
            Review: "",
            Rating: "",
            reserve:[]
        }
        // this.onChange=this.onChange.bind(this);
        // this.onSubmit=this.onSubmit.bind(this)
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

<form onSubmit={this.onSubmit} >
<label>
Review </label>
                       <input type="text" name="Review" value={this.state.Review} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                    Rating </label>
                       <input type="text" name="Rating" value={this.state.Rating} onChange={this.onChange}></input>            
                    <br/>
                    
                    <label>
                        <input type="submit" value="Submit" />
                    </label>  
                    </form>
                    <div>
                        {this.state.reserve.map((res) => <ul><li>
                            {res.review}</li>
                            <li>
                                {res.rating}</li></ul>)}
                    </div>
                    {/* <Button><Link to="/manageReservation"> clik</Link> /</Button> */}

           
  </React.Fragment>
        )
    }
}
