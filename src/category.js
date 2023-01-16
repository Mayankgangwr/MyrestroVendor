import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Category = ()=>{

    return (
        <>
        <main style={{marginTop: '58px'}}>
        <div className="container-fluid pt-4">
        <nav  aria-label="breadcrumb" className="pathhistory">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#" className='nav-link'>
                        <i className="fas fa-globe small me-2"></i> Dashboard
                    </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Category</li>
            </ol>
        </nav>
        <div className="col-12 blockborder p-2">   
        <table className="table align-middle mb-0 bg-white" style={{borderRadius:'10px'}}>
  <thead className="bg-light">
    <tr>
      <th>Title</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
      </td>
      <td>
     <div className='d-flex'>
      <button type="button" class="btn btn-link btn-sm btn-rounded">
        <i class="far fa-trash-alt"></i>
      </button>
      <button type="button" class="btn btn-link btn-sm btn-rounded">
        <i class="far fa-edit"></i>
      </button>
      </div>
     </td>
   
    </tr>
  </tbody>
</table>           
         </div>
        </div>
        </main>
        </>
    );  
}
export default Category;