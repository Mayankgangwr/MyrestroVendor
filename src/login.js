import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './action/index';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Loginform = () =>{  
  const formdata = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "Prince Kurmi",
    password:"hello"
  });
  const  navigate  = useNavigate();
  const Login = () =>{
    axios
      .post("https://sattasafari.com/restro/login.php", data)
      .then(function (response) {
        console.log(response.data);
      });
  }
 return(
        <>
          <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <button onClick={Login}>Click</button>
        </div>
        </main>
        </>
      );
};
export default Loginform;