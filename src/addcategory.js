import React, { useState, useEffect } from "react";
import axios from "axios";
const AddCat = () => {
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
                Add Category
              </li>
            </ol>
          </nav>
          <div className="blockborder row d-flex justify-content-center">
            <div className="col-6">
              <form className="m-4" action="#">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control border"
                    required
                  />
                  <label className="form-label" for="name">
                    Category Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <select id="status" className="form-select">
                    <option value="active">Active</option>
                    <option value="diactive">Deactive</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AddCat;
