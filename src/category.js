import React, { useState, useEffect } from "react";
import { ReadCategory } from "./action/index";
import axios from "axios";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
const Category = () => {
  const categorydata = useSelector((state) => state.CategoryData);
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
                Category
              </li>
            </ol>
          </nav>
          <div className="blockborder row py-2">
            <div className="col-6">
              <p className="fw-normal mb-1">{`Total Category ${categorydata.length}`}</p>
            </div>
            <div className="col-6 text-end">
              <button type="button" class="btn btn-info btn-sm btn-rounded">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-12 blockborder p-2">
            <table
              className="table align-middle mb-0 bg-white"
              style={{ borderRadius: "10px" }}
            >
              <thead className="bg-light">
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categorydata.map(({ id, title, status }) => (
                  <tr key={id}>
                    <td>
                      <p className="fw-normal mb-1">{title}</p>
                    </td>
                    <td>
                      <span className="badge badge-warning rounded-pill d-inline">
                        {status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex">
                        <button
                          type="button"
                          class="btn btn-link btn-sm btn-rounded"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-link btn-sm btn-rounded"
                        >
                          <i class="far fa-edit"></i>
                        </button>
                      </div>
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
};
export default Category;
