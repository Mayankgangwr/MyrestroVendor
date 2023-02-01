import React, { useState, useEffect } from "react";
import { ReadProduct } from "./action/index";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";
import CountUp from "react-countup";
const Home = () => {
  const prodata = useSelector((state) => state.ProductData);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getPro();
    getOrd();
  }, []);

  function getPro() {
    const data = {
      restroid: localStorage.getItem("restroid"),
    };
    axios
      .post(`${process.env.REACT_APP_BASEURL}/restro/product/read.php`, data)
      .then(function (response) {
        if (response.data.message == "No record found.") {
        } else {
          dispatch(ReadProduct(response.data));
        }
      });
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
  function getOrd() {
    const restroid = localStorage.getItem("restroid");
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/restro/order/read.php?restroid=${restroid}`
      )
      .then(function (response) {
        setOrders(response.data);
      });
  }

  const current = new Date();
  let currdate;
  let lastdate;
  if (current.getDate() < 10) {
    currdate = `0${current.getDate()}`;
    lastdate = `0${current.getDate() - 1}`;
  } else {
    currdate = `${current.getDate()}`;
    lastdate = `${current.getDate() - 1}`;
  }
  const cdate = `${current.getFullYear()}-0${
    current.getMonth() + 1
  }-${currdate}`;
  console.log(cdate);
  const ldate = `${current.getFullYear()}-0${
    current.getMonth() + 1
  }-${lastdate}`;

  let curr = 0;
  orders.map((item) => {
    if (item.date == cdate) {
      curr++;
    }
  });
  let ls = 0;
  orders.map((item) => {
    if (item.date == ldate) {
      ls++;
    }
  });
  let today = curr;
  let yesterday = ls;
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          {/*<h1>
            Wellcome{" "}
            <span style={{ color: "red" }}>
              {localStorage.getItem("restrotitle")}
            </span>
  </h1>*/}
          <div className="row">
            <div className="col-md-4 col-12 mt-2">
              <Link to="/order">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./images/circle.svg"
                      class="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Today's Order{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">
                      <CountUp end={today} duration={1} />
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-12 mt-2">
              <Link to="/order">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./images/circle.svg"
                      class="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Yesterday's Order{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">
                      <CountUp end={yesterday} duration={1} />
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-12 mt-2">
              <Link to="/order">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="./images/circle.svg"
                      class="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Total Order{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">
                      <CountUp end={orders.length} duration={1} />
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <nav aria-label="breadcrumb" className="pathhistory mt-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#" className="fs-5 nav-link">
                  <b>Recent Products</b>
                </a>
              </li>
            </ol>
          </nav>
          <div className="blockborder row">
            {prodata.length > 0 &&
              prodata.slice(0, 20).map((el) => (
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
                          className="item-logo rounded-5"
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
                  onClick={() => navigate("/addpro")}
                  type="button"
                  className="btn btn-info btn-rounded mt-2"
                  style={{ width: "200px" }}
                >
                  Add New Product
                </button>
              </h4>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
("");

export default Home;
