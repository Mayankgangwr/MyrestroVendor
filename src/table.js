import React from 'react';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
const Table = () => {
    $(document).ready(function() {
        $('#dataTable').DataTable();
    } );
    return (
        <>
        <div className="col-12">   
        <table id="dataTable" className="table table-striped table-bordered nowrap" cellspacing="0" width="100%">
           <thead>
             <tr>
               <th>Items</th>
               <th>Price</th>
               <th>Status</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>   
           <tr>
                <td>10</td>
                <td>200</td>
                <td>
                    <span class="badge bg-primary">Processing</span>
                </td>
                <td className='d-flex justify-content-center'>
                  <button className='btn btn-danger mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-trash-alt"></i></button>
                  <button className='btn btn-info mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-eye"></i></button>
                </td>
           </tr>           
           <tr>
                <td>10</td>
                <td>200</td>
                <td>
                    <span class="badge bg-danger">Cancelled</span>
                </td>
                <td className='d-flex justify-content-center'>
                  <button className='btn btn-danger mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-trash-alt"></i></button>
                  <button className='btn btn-info mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-eye"></i></button>
                </td>
           </tr>           
           <tr>
                <td>10</td>
                <td>200</td>
                <td>
                    <span class="badge bg-success">Completed</span>
                </td>
                <td className='d-flex justify-content-center'>
                  <button className='btn btn-danger mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-trash-alt"></i></button>
                  <button className='btn btn-info mx-1 px-lg-5 px-sm-4 px-3 py-2'><i class="far fa-eye"></i></button>
                </td>
           </tr>           
              
           </tbody>
         </table>
            
         </div>
        </>
        );
}
export default Table;