import React, { Component } from 'react'
import axios from 'axios'
import '../styles/Rooms.css'
import {Carousel, Button} from 'react-bootstrap/'
import { Link } from 'react-router-dom'

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
//         console.log(this.state.img);
//         const {url}= this.state.img
//      return (
//             <div className="room-main-container">
                
// {/* <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="sdfsd" /> */}
//                  {this.state.reserve.map((res) => <div className="room-container">

//                     <img src={res.roomImage}  hegith="400px" width="400px" alt="sfdsf" />
//                     <p>{res.amenities} &nbsp; {res.price} &nbsp; &nbsp;{res.roomType} </p>
                 
                 
//                      </div>
//                     )} 
//             </div>
//         )
//     }
// }
return (
    <React.Fragment>
        <div style={{ margin: "90px" , 'display' : 'flex', justifyContent: "center", }}>

        <Carousel className="carousel-container" style={{'height':"580px", 'width' : "80%" , 
                    }} >
        {this.state.reserve.map((result) =>{
            return(
                <Carousel.Item className="carousel-item">
                <img style={{'height':"500px" , 'width': "90%", marginTop: "2%" , marginLeft:'140px'}} 
                
                src={result.roomImage} 
                alt="slide"  
                />  
                    <Carousel.Caption className="carousel-caption">
    
                  <p >{result.amenities} | &nbsp; {result.roomType} | &nbsp; {result.price} <span>usd/night</span> </p>
     </Carousel.Caption></Carousel.Item  > )
        }     
            ) }
        </Carousel>
        </div>
     
    </React.Fragment>
     )
 }
}