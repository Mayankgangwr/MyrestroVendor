import React, { useState, useEffect } from "react";
import { ReadCategory } from "./action/index";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import axios from "axios";
const AddPro = () => {
  const catdata = useSelector((state) => state.CategoryData);
  const { proid } = useParams();
  console.log(proid);
  const dispatch = useDispatch();
  useEffect(() => {
    getCat();
  }, []);
  function getCat() {
    const data = {
      restroid: localStorage.getItem("restroid"),
    };
    axios
      .post("https://sattasafari.com/restro/category/read.php", data)
      .then(function (response) {
        dispatch(ReadCategory(response.data));
      });
  }
  const catobj = catdata.filter((item) => {
    return item.id == proid;
  });
  const [prodata, setProdata] = useState({
    restroid: localStorage.getItem("restroid"),
    proname: "",
    procatid: proid,
    proimg: "",
    promrp: "",
    proprice: "",
    prostatus: "Active",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProdata({ ...prodata, [name]: value });
  };
  const AddPro = (e) => {
    e.preventDefault();
    if (prodata.proname !== "") {
      axios
        .post("https://sattasafari.com/restro/product/create.php", prodata)
        .then(function (response) {
          alert(response.data.message);
          if ((response.data.message = "Data Added")) {
            setProdata({
              restroid: localStorage.getItem("restroid"),
              proname: "",
              procatid: proid,
              proimg: "",
              promrp: "",
              proprice: "",
              prostatus: "Active",
            });
          }
        });
    } else {
      alert("Enter Category Name");
    }
  };
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container-fluid pt-4">
          <nav aria-label="breadcrumb" className="pathhistory">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-globe small me-2"></i> Dashboard
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Product
              </li>
            </ol>
          </nav>
          <form className="blockborder" onSubmit={AddPro}>
            <div className="row mx-2 d-flex justify-content-center pt-4">
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <select className="form-control border">
                    {catdata.map(({ id, title }) => {
                      if (id == proid) {
                        return <option value={id}>{title}</option>;
                      }
                    })}
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <input
                    type="text"
                    name="proname"
                    value={prodata.proname}
                    onChange={handleChange}
                    className="form-control border"
                    required
                  />
                  <label className="form-label" for="proname">
                    Product Name
                  </label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <input
                    type="number"
                    name="promrp"
                    value={prodata.promrp}
                    onChange={handleChange}
                    className="form-control border"
                    required
                  />
                  <label className="form-label" for="promrp">
                    Product MRP
                  </label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <input
                    type="number"
                    name="proprice"
                    value={prodata.proprice}
                    onChange={handleChange}
                    className="form-control border"
                    required
                  />
                  <label className="form-label" for="proprice">
                    Product Price
                  </label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <input
                    type="text"
                    name="proimg"
                    value={prodata.proimg}
                    onChange={handleChange}
                    className="form-control border"
                    required
                  />
                  <label className="form-label" for="proimg">
                    Paste product pic link
                  </label>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                <div className="form-outline my-2">
                  <select
                    name="prostatus"
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="active">Active</option>
                    <option value="diactive">Deactive</option>
                  </select>
                </div>
              </div>
              <div className="col-12 my-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default AddPro;
