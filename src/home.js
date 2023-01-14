import React, {useState} from 'react';
const Home = () => {
    const [page, setPage] = useState(0);
    const chunkSize = 10;
    const arr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    const groups = arr.map((e, i) => { 
         return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
    }).filter(e => { return e; });
    console.log({arr, groups});
   
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