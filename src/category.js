import React, {useEffect, useState} from 'react';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';
const Category = ()=>{
    $(document).ready(function() {
        $('#dataTable').DataTable();
    } );
    useEffect(() => {
      getUsers();
  }, []);
  const [catdata, setCatdata] =  useState("");
  function getUsers() {
      axios.get(`https://sattasafari.com/restro/readcat.php`).then(function(response) {
          setCatdata(response.data);
      });
  }
  console.log(catdata);
    return (
        <>
        <main style={{marginTop: '58px'}}>
        <div className="container-fluid pt-4">
        <nav  aria-label="breadcrumb" className="pathhistory">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#" className='nav-link'>
                        <i class="fas fa-globe small me-2"></i> Dashboard
                    </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Category</li>
            </ol>
        </nav>
        <div className="col-12 blockborder">   
        <table id="dataTable" className="table table-striped table-bordered nowrap" cellspacing="0"  style={{width:"100%", border:'1px solid #7e7a7a'}}>
           <thead>
             <tr>
               <th>Title</th>
               <th>Status</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody> 
            {catdata.map((el)=>(
                <tr key={el.id}>
                <td>{el.title}</td>
                <td>
                 <span class="badge bg-primary">{el.status}</span>
                </td>
                <td className='d-flex justify-content-center'>
                    <button className='btn btn-danger mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-trash-alt"></i></button>
                    <button className='btn btn-info mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-edit"></i></button>
                </td>
                </tr>                            
            ))}
           </tbody>
         </table>            
         </div>
        </div>
        </main>
        </>
    );  
}
export default Category;