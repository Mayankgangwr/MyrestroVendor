import React, { useEffect, useState } from "react";
import { ReadOrder } from "./action/index";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./order.css";
import { useSelector, useDispatch } from "react-redux";
const Orders = () => {
  const [btns, setBtns] = useState({
    all: "btn-primary",
    pending: "btn-primary",
    accepted: "btn-primary",
    ready: "btn-primary",
    ontable: "btn-primary",
    preparing: "btn-primary",
    complete: "btn-primary",
  });
  const orderdata = useSelector((state) => state.OrderData);
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      getOrd();
    }, 1000);
  });
  useEffect(() => {
    const val = param.status;
    setBtns({ ...btns, [param.status]: "btn-info" });
  }, []);

  function getOrd() {
    const restroid = localStorage.getItem("restroid");
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}/restro/order/read.php?restroid=${restroid}`
      )
      .then(function (response) {
        dispatch(ReadOrder(response.data));
      });
  }
  const [proupdata, setProupdata] = useState("mmm");
  const handleChange = (e) => {
    const value = e.target.value;
    setProupdata(value);
  };
  const updateord = (id) => {
    const productdata = {
      productid: id,
      productstatus: proupdata,
    };
    if (productdata.productstatus !== "") {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/restro/order/update.php`,
          productdata
        )
        .then(function (response) {
          //alert(response.data.message);
          getOrd();
        });
    }
  };
  const getBill = (id) => {
    const productdata = {
      productid: id,
      productstatus: "complete",
    };
    if (productdata.productstatus !== "") {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/restro/order/update.php`,
          productdata
        )
        .then(function (response) {
          //alert(response.data.message);
          getOrd();
          navigate(`/bill/${id}`);
        });
    }
  };

  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="d-flex justify-content-start w-100">
          <button
            onClick={() => {
              setBtns({
                all: "btn-info",
                pending: "btn-primary",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-primary",
              });
              navigate("/order");
            }}
            className={`btn btn-info btn-custom me-1`}
          >
            All
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-info",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-primary",
              });
              navigate("/order/pending");
            }}
            className={`btn ${btns.pending} btn-custom me-1`}
          >
            Pending
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-primary",
                accepted: "btn-info",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-primary",
              });
              navigate("/order/accepted");
            }}
            className={`btn ${btns.accepted} btn-custom me-1`}
          >
            Accepted
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-primary",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-info",
              });
              navigate("/order/preparing");
            }}
            className={`btn ${btns.preparing} btn-custom me-1`}
          >
            Preparing
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-primary",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-info",
              });
              navigate("/order/ready");
            }}
            className={`btn ${btns.ready} btn-custom me-1`}
          >
            Ready
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-primary",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-info",
              });
              navigate("/order/ontable");
            }}
            className={`btn ${btns.ontable} btn-custom me-1`}
          >
            OnTable
          </button>
          <button
            onClick={() => {
              setBtns({
                all: "btn-primary",
                pending: "btn-primary",
                accepted: "btn-primary",
                ready: "btn-primary",
                ontable: "btn-primary",
                complete: "btn-primary",
                preparing: "btn-info",
              });
              navigate("/order/complete");
            }}
            className={`btn ${btns.complete} btn-custom me-1`}
          >
            Complete
          </button>
        </div>
        <div className="container-fluid">
          {/*<nav aria-label="breadcrumb" className="pathhistory">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-globe small me-2"></i> Dashboard
                </a>
              </li>
              <li
                className="breadcrumb-item text-capitalized active"
                aria-current="page"
              >
                {`${param.status} Orders`}
              </li>
            </ol>
          </nav>*/}
          <div className="row">
            {orderdata.map((el) => (
              <div
                key={el.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3"
              >
                <div className="card  card-item ">
                  <div className="card-header ms-1 pb-0">
                    <div className="d-flex justify-content-between mt-2">
                      <h5 className="card-title text-center text-warning">
                        {`${el.client_name}`}
                      </h5>
                      <h5 className="card-title text-center text-warning">
                        {`Table No: ${el.tableno}`}
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <h6 className="card-title text-primary mt-2">
                        {el.date}
                      </h6>
                      <h6 className="card-title text-capitalized  mt-2 text-danger">
                        {el.status == "ontable" ? "On Table" : el.status}
                      </h6>
                    </div>
                  </div>
                  <div className="card-body p-2 mb-2">
                    <table>
                      <thead>
                        <tr>
                          <td className="px-3">
                            <b>Name</b>
                          </td>
                          <td className="px-3">
                            <b>Qty</b>
                          </td>
                          <td className="px-3">
                            <b>Price</b>
                          </td>
                          <td className="px-3">
                            <b>Total</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {JSON.parse(el.products).map((item) => (
                          <tr key={item.id}>
                            <td className="px-3">{item.title}</td>
                            <td className="px-3">{item.qty}</td>
                            <td className="px-3">{item.price}</td>
                            <td className="px-3">{item.qty * item.price}</td>
                          </tr>
                        ))}
                        <hr />
                        <tr className="my-2">
                          <td className="px-3">
                            <b>Qty</b>
                          </td>
                          <td className="px-3">
                            <b>
                              {JSON.parse(el.products).reduce((total, item) => {
                                return total + item.qty;
                              }, 0)}
                            </b>
                          </td>
                          <td className="px-3">
                            <b>Amount</b>
                          </td>
                          <td className="px-3">
                            <b>
                              {JSON.parse(el.products).reduce((total, item) => {
                                return total + item.qty * item.price;
                              }, 0)}
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-8">
                        <select
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value={el.status}>{el.status}</option>
                          <option value="accepted">Accepted</option>
                          <option value="ready">Ready To Serve</option>
                          <option value="preparing">Preparing</option>
                        </select>
                      </div>
                      <div className="col-2 mt-1">
                        <button
                          type="button"
                          onClick={() => updateord(el.id)}
                          className="btn btn-info btn-sm btn-rounded"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                      </div>
                      <div className="col-2 mt-1">
                        <button
                          onClick={() => getBill(el.id)}
                          type="button"
                          className="btn btn-primary btn-sm btn-rounded"
                        >
                          <i className="fas fa-file-invoice"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {orderdata.length == 0 && (
              <h4 className="text-center mt-2">
                There is no Data. <br />
              </h4>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Orders;
