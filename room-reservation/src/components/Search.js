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
                       
                        // // "limit":"30",
                        // "currency":"USD",
                        // // "distance":"2",
                        // // "unit":"km",
                        // "lang":"en_US",
                        // // "latitude":"32.778534",
                        // // "longitude":"-96.79938"
                 
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
                       
                        // // "limit":"30",
                        // "currency":"USD",
                        // // "distance":"2",
                        // // "unit":"km",
                        // "lang":"en_US",
                        // // "latitude":"32.778534",
                        // // "longitude":"-96.79938"
                 
                        }
               });
        // try{
        //     const response = await axios.get("https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng",
        //        {
        //           "headers":{
        //             "content-type":"application/octet-stream",
        //             "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //               "x-rapidapi-key":API_KEY,
        //               "useQueryString":true
        //               },"params":{
        //                 // "location_id":"55711",
        //                 "limit":"30",
        //                 "currency":"USD",
        //                 "distance":"2",
        //                 "lunit":"km",
        //                 "lang":"en_US",
        //                 "latitude":"32.778534",
        //                 "longitude":"-96.79938"
                 
        //                 }
        //        });
        //make a plan   latitude: "32.778534", longitude: "-96.79938",

        // try{
        //     const response = await axios.get("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
        //        {
        //           "headers":{
        //             "content-type":"application/octet-stream",
        //             "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //               "x-rapidapi-key":API_KEY,
        //               "useQueryString":true
        //               },"params":{
        //                 // "location_id":"55711",
        //                 "limit":"30",
        //                 "currency":"USD",
        //                 "distance":"2",
        //                 "lunit":"km",
        //                 "lang":"en_US",
        //                 "latitude":"32.778534",
        //                 "longitude":"-96.79938"
                 
        //                 }
        //        });

//things to da dallas, restaurants
        // try{
        //     const response = await axios.get("https://tripadvisor1.p.rapidapi.com/locations/search",
        //        {
        //           "headers":{
        //             "content-type":"application/octet-stream",
        //             "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
        //               "x-rapidapi-key":API_KEY,
        //               "useQueryString":true
        //               },"params":{
        //                 "location_id":"55711",
        //                 "limit":"30",
        //                 "sort":"relevance",
        //                 "offset":"0",
        //                 "lang":"en_US",
        //                 "currency":"USD",
        //                 "units":"km",
        //                 "query":"restaurants"
        //                 }
        //        });

        //   try{
        //   const response = await axios.get("https://hotels4.p.rapidapi.com/properties/get-details",
        //      {
        //         "headers":{
        //             "content-type":"application/octet-stream",
        //             "x-rapidapi-host":"hotels4.p.rapidapi.com",
        //             "x-rapidapi-key":API_KEY,
        //             "useQueryString":true
        //             },"params":{
        //             "locale":"en_US",
        //             "currency":"USD",
        //             "checkOut":"2020-01-15",
        //             "adults1":"1",
        //             "checkIn":"2020-01-08",
        //             "id":"424023"
        //             }
        //      });
            //  console.log(response.data);  
            console.log(restau.data.data)
            let x=restau.data.data;
            //  let y= response.data.data
             //console.log(y);  
            //  console.log(y[0].photo.caption); result works
           console.log(x[0].photo.images.medium.url); 
           console.log(x[0].cuisine[0].name); 
            //  let x = JSON0.stringify(response.data);
            //  console.log(x)
            // let x=response.data
            //  console.log(x.data.body.amenities[0]);  
             //console.log(response.data.neighborhood);      
    //console.log("This works", response.data.transportation.transportLocations[0]);   
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
    {/* <li>
        <img src={reser.photo.images.medium.url} /> </li> */}
{/* <li>{res.photo}</li> */}
    <li>{reser.address}</li><li>{reser.name}</li><li>{reser.description}
        </li></ul>)}</div>
{this.state.results.map((res) => <ul><li>
        <img src={res.photo.images.medium.url} /> </li><li>{res.address}</li><li>{res.name}</li><li>{res.description}
        </li></ul>)}
</div>
        )
    }
}