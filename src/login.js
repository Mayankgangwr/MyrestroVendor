import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './action/index';
import { useNavigate } from "react-router-dom";
const Loginform = () =>{  
  const formdata = useSelector((state) => state.formData);
  const [data, setData] = useState({
    name: "Prince Kurmi",
    password:"hello"
  });
  const navigate  = useNavigate();
  useEffect(() => {
    localStorage.getItem('Name');
    getUsers();
},[]);
function getUsers() {
  const length = formdata.length;
     console.log(formdata.length);
   }
  const dispatch = useDispatch();
  console.log(formdata.length);
 return(
        <>
          <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <button onClick={()=>dispatch(Login(data))}>Click</button>
        </div>
        </main>
        </>
      );
};
export default Loginform;