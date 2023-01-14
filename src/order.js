import React,{useEffect} from 'react';
import {ReadOrder} from './action/index';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
const Orders = ()=>{
    const orderdata = useSelector((state) => state.OrderData);
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers(){
        axios.get("https://sattasafari.com/restro/order/read.php")
        .then(function (response) {
           console.log(response.data);
        });
    }
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
                <li class="breadcrumb-item active" aria-current="page">Orders</li>
            </ol>
        </nav>
        <div className="col-12 blockborder">   
            
         </div>
        </div>
        </main>
        </>
    );
        
}
export default Orders;