import React, {useEffect, useState} from "react";
import axios from "axios";
const Loginform = () =>{
    const loged = (e) =>{
        //e.preventDefault();
        const inputs = {
          "userid": "APNA70001",
          "password":"apnaretro001"
        };
        axios.get(`https://sattasafari.com/restro/login.php?userid=${inputs.userid}&password=${inputs.password}`).then(function(response){
          console.log(response.data);
          if(Array.isArray(response.data)){
            alert("got");
          }
        });
      }
      useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`https://sattasafari.com/restro/login.php`).then(function(response) {
            console.log(response.data);
            if(response.data.message==="Already Login"){
              alert(response.data.message);
            }
        });
    }
      return(
        <>
        <button onClick={loged}>Click</button>
        </>
      );
};
export default Loginform;