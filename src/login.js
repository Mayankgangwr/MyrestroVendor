import React, {useEffect, useState} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
const Loginform = () =>{
  const [cookie, setCookies] = useCookies(['user']);
    const loged = (e) =>{
        //e.preventDefault();
        const inputs = {
          "userid": "APNA70001",
          "password":"apnaretro001"
        };
        axios.get(`https://sattasafari.com/restro/login.php?userid=${inputs.userid}&password=${inputs.password}`).then(function(response){
          console.log(response.data);
          if(Array.isArray(response.data)){
            setCookies("user",response.data);
            console.log(cookie);
          }
          if(response.data.message==="Already Login"){
            alert(response.data.message);
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
           <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <button onClick={loged}>Click</button>
        </div>
        </main>
        </>
      );
};
export default Loginform;