const express= require('express');
const app=express();
const { Navigator } = require("node-navigator");
const navigator = new Navigator();

const successCallback = (geolocation) => {
    console.log(geolocation);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  const geolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000,
  };
 const getLocation=()=>{
    if ("geolocation" in navigator) {
        // Access the API
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback,
          geolocationOptions,
        );
      } else {
        // Use a third-party geolocation service
        console.log("Browser does not support the Geolocation API");
      }
 }
    
  getLocation();
 
app.get("/",(req,res)=>{
    res.send("Geolocation testing");

})
app.listen(8000,()=>{
    console.log("server is running");
})