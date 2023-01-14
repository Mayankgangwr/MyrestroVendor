import React, {useEffect, useState} from "react";
import axios from "axios";
const Loginform = () =>{
    const loged = (e) =>{
        //e.preventDefault();
        const inputs = {
          "userid": "APNA70001",
          "password":"apnaretro001"
        };
        axios.get(`https://sattasafari.com/restro/login.php?userid=${inputs.userid}&password=${inputs.password}`,
         inputs).then(function(response){
            console.log(response);
        });
      }
      return(
        <>
        <button onClick={loged}>Click</button>
        </>
      );
};
export default Loginform;