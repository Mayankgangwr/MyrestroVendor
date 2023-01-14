import React, {useState} from 'react';
const Home = () => {
     return (
        <>
        <main style={{marginTop: '58px'}}>
        <div className="container pt-4">
        <ul>
        {groups[page].map((el,i)=>(
            <li>{i+1}</li>
        ))}    
        </ul>
        {groups.map((el,i)=>(
            <button onClick={()=>setPage(i)}>{i+1}</button>
        ))}    
        </div>
        </main>
        </>
    );
  };
  
  export default Home;