import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './sidebar';
import Home from './home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from './order';
import Category from './category';
import Products from './products';
import Loginform from './login';
import axios from 'axios';


function App() {


  return(
  <>
  <BrowserRouter>
  <Sidebar />
      <Routes>
        <Route index element={<Loginform/>} />
        <Route path='home' element={<Home />} />
        <Route path='order' element={<Orders />} />
        {/*<Route path='categories' element={<Category />} />
        <Route path='products' element={<Products />} />*/
  }
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
