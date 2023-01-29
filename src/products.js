import React, { useState, useEffect } from "react";
import { ReadProduct } from "./action/index";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  const navigate = useNavigate();
  const prodata = useSelector((state) => state.ProductData);
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    proname: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({ ...filter, [name]: value });
  };
  useEffect(() => {
    getPro();
    getCat();
  }, []);
  function getPro() {
    const data = {
      restroid: localStorage.getItem("restroid"),
    };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/restro/product/read.php`, data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message == "No record found.") {
        } else {
          dispatch(ReadProduct(response.data));
        }
      });
  }
  function getCat() {
    const data = {
      restroid: localStorage.getItem("restroid"),
    };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/restro/category/read.php`, data)
      .then(function (response) {
        setCategory(response.data);
      });
  }
  const searchdata = prodata.filter((item) => {
    if (filter.proname !== "") {
      const Title = item.title.toUpperCase();
      const pro_name = filter.proname.toUpperCase();
      return Title.includes(pro_name);
    } else {
      return item.title !== filter.proname;
    }
  });
  const sdata = searchdata.filter((item) => {
    if (filter.category !== "") {
      return item.cat_id === filter.category;
    } else {
      return item.cat_id !== filter.category;
    }
  });
  let nocat;
  if (sdata.length > 0) {
    nocat = sdata.length;
  } else {
    nocat = 0;
  }
  function deletePro(dataid) {
    let text = "Are You Sure To Delete This Category.";
    if (confirm(text) == true) {
      const data = {
        dataid: dataid,
      };
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/restro/product/delete.php`,
          data
        )
        .then(function (response) {
          getPro();
        });
    }
  }
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container-fluid pt-4">
          <nav aria-label="breadcrumb" className="pathhistory">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#" className="nav-link">
                  <i class="fas fa-globe small me-2"></i> Dashboard
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
          <div className="blockborder row py-2">
            <div className="col-6">
              <select
                className="form-control"
                style={{ borderRadius: "10px" }}
                onChange={handleChange}
                name="category"
              >
                <option value="">Select Category</option>
                {category.length > 0 &&
                  category.map(({ id, title }) => (
                    <option value={id}>{title}</option>
                  ))}
              </select>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                value={filter.proname}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
                name="proname"
                placeholder="Search by name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="blockborder row">
            {sdata.length > 0 &&
              sdata.map((el) => (
                <div
                  key={el.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3"
                >
                  <div className="card card-item ">
                    <div className="card-body p-2">
                      <div className="d-flex text-black p-0">
                        <img
                          src={el.img}
                          alt="Generic placeholder image"
                          className="item-logo"
                        />
                        <div className="row ps-3">
                          <div className="col-12 d-flex justify-content-between">
                            <div>
                              <h6 className="text-start mb-0">{el.title}</h6>
                              <span>{el.cat_name}</span>
                            </div>
                            <i
                              onClick={() => {
                                deletePro(el.id);
                              }}
                              class="fas fa-trash pro-icon mt-1 me-1"
                              style={{ cursor: "pointer" }}
                            ></i>
                          </div>
                          <div className="col-12 d-flex justify-content-between">
                            <div>
                              <span className="price sale-price pe-2">
                                ${el.price}
                              </span>
                              <span className="price mrp">${el.mrp}</span>
                            </div>
                            <Link to={`/editpro/${el.id}`}>
                              <i className="fas fa-edit pro-icon mt-1 me-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {prodata.length == 0 && (
              <h4 className="text-center mt-2">
                There is no Product. <br />
                <button
                  onClick={() => navigate("/categories")}
                  type="button"
                  className="btn btn-info btn-rounded mt-2"
                  style={{ width: "200px" }}
                >
                  Add New Product
                </button>
              </h4>
            )}
            {prodata.length != 0 && sdata.length == 0 && (
              <h4 className="text-center mt-2">
                There is no Product. <br />
              </h4>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Products;
