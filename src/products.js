import React,{useEffect} from 'react';
import {ReadOrder} from './action/index';
import axios from 'axios';
import './product.css';
import { useSelector, useDispatch } from 'react-redux';
const Products = ()=>{
    const orderdata = useSelector((state) => state.OrderData);
    const dispatch = useDispatch();
    useEffect(() => {
        const data = {
            restroid:localStorage.getItem('restroid')
        }
        axios.post("https://sattasafari.com/restro/product/read.php", data)
        .then(function (response) {
           console.log(response.data);
           dispatch(ReadOrder(response.data));
        });
    }, []);
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
                <li class="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
        </nav>
        <div className='pathhistory row my-2'>
        <div className='col-6'>
            <select className='form-control' name='category'>
                <option value=''>Select Category</option>
                <option value='1'>FastFood</option>
            </select>
        </div>
        <div className='col-6'>
            <input className='form-control' name='category' placeholder='Search by name' />
        </div>
        </div>
        <div className='blockborder row'>
        {orderdata.map((el)=>(
                    <div key={el.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3">
                    <div className="card card-item ">
                        <div className="card-body p-2">
                           <div className="d-flex text-black p-0">
                              <img src={el.img}
                                alt="Generic placeholder image" className="item-logo" />    
                              <div className='row ps-3'> 
                                   <div className='col-12 d-flex justify-content-between'>
                                        <div>
                                        <h6 className='text-start mb-0'>{el.title}</h6>
                                        <span>FastFood</span>
                                        </div>
                                        <i class="fas fa-trash pro-icon mt-1 me-1" style={{cursor:'pointer'}}></i>
                                   </div>
                                   <div className='col-12 d-flex justify-content-between'>
                                      <div>
                                      <span className='price sale-price pe-2'>${el.price}</span>
                                      <span className='price mrp'>${el.mrp}</span>
                                      </div>
                                      <i class="fas fa-edit pro-icon mt-1 me-1" style={{cursor:'pointer'}}></i>
                                   </div>
                              </div>
                           </div>
                        </div>
                    </div>
             </div>
     
        ))}
        </div>
        </div>
        </main>
        </>
    );
        
}
export default Products;