import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
    return (
        <>
        <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <h1>Wellcome <span style={{color:'red'}}>{localStorage.getItem('restrotitle')}</span></h1>    
        </div>
        </main>
        </>
    );
  };""
  
  export default Home;