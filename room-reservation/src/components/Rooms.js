import React, { Component } from 'react'
import axios from 'axios'

export default class Rooms extends Component {

    constructor(props) {
        super(props);
        this.state ={
            reserve:[],
            img: ""
        }
    }


    async componentDidMount() {
 
        try{
                const response = await axios.get("/rosy_api/v1/room_list",
         {       headers: {
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'application/json',
            
          },
                  });
                console.log(JSON.stringify(response.data[0].roomImage));
                this.setState({reserve: response.data, img: response.data[0].roomImage})
            }
    
        catch(e){
                console.log("Error", e)
            }
        }
    render() {
        console.log(this.state.img);
        const {url}= this.state.img
     return (
            <div>
                Rooms
{/* <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="sdfsd" /> */}
                 {this.state.reserve.map((res) => <div>

                    <img src={res.roomImage}  hegith="300px" width="400px" alt="sfdsf" />
                    <p>{res.amenities} &nbsp; {res.price} &nbsp; &nbsp;{res.roomType} </p>
                 
                 
                     </div>
                    )} 
            </div>
        )
    }
}
