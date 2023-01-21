import React, { useState, useEffect } from "react";
import { ReadCategory } from "./action/index";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import CountUp from 'react-countup';
const Category = () => {
  const categorydata = useSelector((state) => state.CategoryData);
  const navigate = useNavigate();
  let nocat;
  if (categorydata.length > 0) {
    nocat = categorydata.length;
  } else {
    nocat = 0;
  }
  console.log(categorydata);
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
  function deleteCat(dataid) {
    let text = "Are You Sure To Delete This Category.";
    if (confirm(text) == true) {
      const data = {
        restroid: localStorage.getItem("restroid"),
        dataid: dataid,
      };
      axios
        .post("https://sattasafari.com/restro/category/delete.php", data)
        .then(function (response) {
          getCat();
        });
    }
  }
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container-fluid pt-4  mb-4">
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
              <p className="fw-normal mb-1">{`Total Category ${nocat}`}</p>
            </div>
            <div className="col-6 text-end">
              <button
                type="button"
                onClick={() => navigate("/addcat")}
                className="btn btn-info btn-sm btn-rounded"
              >
                <i className="fas fa-plus"></i>
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
                {categorydata.length > 0 &&
                  categorydata.map(({ id, title, status }) => (
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
                            type="submit"
                            onClick={() => {
                              deleteCat(id);
                            }}
                            className="btn btn-danger btn-sm btn-rounded"
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                          <Link
                            to={`/editcat/${id}`}
                            className="btn btn-primary btn-sm btn-rounded mx-1"
                          >
                            <i className="far fa-edit"></i>
                          </Link>
                          <button
                            type="button"
                            onClick={() => navigate(`/addpro/${id}`)}
                            className="btn btn-info btn-sm btn-rounded"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {nocat == 0 && (
              <h4 className="text-center mt-2">
                There is no category. <br />
                <button
                  type="button"
                  onClick={() => navigate("/addcat")}
                  className="btn btn-info btn-rounded mt-2"
                  style={{ width: "200px" }}
                >
                  Add New Category
                </button>
              </h4>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Category;
