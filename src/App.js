import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./order";
import Category from "./category";
import Products from "./products";
import Loginform from "./login";
import AddCat from "./addcategory";
import AddPro from "./addproduct";
import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Loginform />} />
          <Route path="/" element={<Sidebar />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="order" element={<Orders />} />
            <Route path="categories" element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path="addcat" element={<AddCat />} />
            <Route path="addpro" element={<AddPro />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
