import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [auth, setAuth] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        var emaildata = localStorage.getItem('email');
        setAuth(emaildata); 
        if(localStorage.getItem('email')===null){
            navigate('/');
        }  
    }); 
    const logout = () => {
        localStorage.removeItem('email');
        navigate('/');
    }
    return (
        <>
        <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <h1>Wellcome <span style={{color:'red'}}>{auth}</span></h1>
        <button onClick={logout}>Logout</button>
        </div>
        </main>
        </>
    );
  };""
  
  export default Home;