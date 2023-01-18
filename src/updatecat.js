import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
const UpdateCat = () => {
  const updatacatedata = useSelector((state) => state.CategoryData);
  const navigate = useNavigate();
  const parameter = useParams();
  let updata;
  updatacatedata.map((item) => {
    if (item.id == parameter.id) {
      updata = item;
    }
  });
  console.log(updata);
  const [catdata, setCatdata] = useState({
    catid: updata.id,
    catname: updata.title,
    catstatus: "Active",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCatdata({ ...catdata, [name]: value });
  };
  const editcategory = (e) => {
    e.preventDefault();
    if (catdata.catname !== "") {
      axios
        .post("https://sattasafari.com/restro/category/update.php", catdata)
        .then(function (response) {
          alert(response.data.message);
          if (response.data.message === "Data Updated") {
            navigate("/categories");
          }
        });
    } else {
      alert("Enter Category Name");
    }
  };
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container-fluid pt-4 mb-4">
          <nav aria-label="breadcrumb" className="pathhistory">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-globe small me-2"></i> Dashboard
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit Category
              </li>
            </ol>
          </nav>
          <div className="blockborder row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-10">
              <form className="m-4" action="#">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="catname"
                    value={catdata.catname}
                    onChange={handleChange}
                    className="form-control border"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <select
                    name="catstatus"
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="active">Active</option>
                    <option value="diactive">Deactive</option>
                  </select>
                </div>
                <button
                  type="submit"
                  onClick={editcategory}
                  className="btn btn-primary btn-block"
                >
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
export default UpdateCat;
