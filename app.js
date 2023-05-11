const express= require('express');
const app=express();
const { Navigator } = require("node-navigator");
const cors=require('cors')
const navigator = new Navigator();
const PORT= process.env.PORT || 8000;
app.use(cors({ origin: true, credentials: true }));
let location;
const successCallback = (geolocation) => {
    
    location=geolocation;
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
   
  
 
app.get("/",(req,res)=>{
  getLocation();
    res.send(location);

})
app.listen(PORT,()=>{
    console.log("server is running");
})
