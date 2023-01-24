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
import UpdateCat from "./updatecat";
import EditPro from "./updatepro";
import Pending from "./pending";
import axios from "axios";
import Bill from "./bill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Loginform />} />
          <Route path="/" element={<Sidebar />}>
            <Route path="dashboard" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:status" element={<Pending />} />
            <Route path="categories" element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path="addcat" element={<AddCat />} />
            <Route path="editcat/:id" element={<UpdateCat />} />
            <Route path="addpro/:catid" element={<AddPro />} />
            <Route path="editpro/:proid" element={<EditPro />} />
            <Route path="bill/:ordid" element={<Bill />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
