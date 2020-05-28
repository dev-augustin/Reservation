import React, { Component } from 'react';
import axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
export default class Search extends Component {

    
    constructor(props) {
        super(props);
        this.state ={
            results: [],
            restaurants: []
        }
    }
    async componentDidMount() {
        try{
            const response = await axios.get("https://tripadvisor1.p.rapidapi.com/attractions/list",
               {
                  "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                      "x-rapidapi-key":API_KEY,
                      "useQueryString":true
                      },"params":{
                        "lang":"en_US",
                        "currency":"USD",
                        "sort":"recommended",
                        "lunit":"km",
                        "location_id":"55711",
                        "limit" : "5"
                 
                        }
               });
               const restau = await axios.get("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
               {
                  "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
                      "x-rapidapi-key":API_KEY,
                      "useQueryString":true
                      },"params":{
                        "limit":"5",
    "currency":"USD",
    "distance":"2",
    "lunit":"km",
    "lang":"en_US",
    "latitude":"32.778534",
    "longitude":"-96.79938"
           
            this.setState({results: response.data.data, isLoading: false})
            this.setState({restaurants: restau.data.data, isLoading: false})  
        
        }
          
        catch(e){
            console.log("Error", e)
        }
      }


      render() {
          console.log(this.state.restaurants)

        return (
            <div>

<div style={{backgroundColor:'yellow'}}>{this.state.restaurants.map((reser) => <ul>
    
    <li>{reser.address}</li><li>{reser.name}</li><li>{reser.description}
        </li></ul>)}</div>
{this.state.results.map((res) => <ul><li>
        <img src={res.photo.images.medium.url} /> </li><li>{res.address}</li><li>{res.name}</li><li>{res.description}
        </li></ul>)}
</div>
        )
    }
}
