import React, { useEffect, useState } from "react";
import { ReadOrder } from "./action/index";
import axios from "axios";
import "./order.css";
import { useSelector, useDispatch } from "react-redux";
const Orders = () => {
  const orderdata = useSelector((state) => state.OrderData);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrd();
  }, []);
  function getOrd() {
    const restroid = localStorage.getItem("restroid");
    console.log(restroid);
    axios
      .get(`https://sattasafari.com/restro/order/read.php?restroid=${restroid}`)
      .then(function (response) {
        console.log(response.data);
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
        .post("https://sattasafari.com/restro/order/update.php", productdata)
        .then(function (response) {
          //alert(response.data.message);
          getOrd();
        });
    }
  };
  const getBill = (id) => {
    const productdata = {
      productid: id,
      productstatus: "Complete",
    };
    if (productdata.productstatus !== "") {
      axios
        .post("https://sattasafari.com/restro/order/update.php", productdata)
        .then(function (response) {
          //alert(response.data.message);
          getOrd();
        });
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
                Orders
              </li>
            </ol>
          </nav>
          <div className="blockborder row">
            {orderdata.map((el) => (
              <div
                key={el.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3"
              >
                <div className="card  card-item ">
                  <div className="card-header ms-1 pb-0">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title text-primary">
                        {el.client_name}
                      </h5>
                      <h6 className="card-title text-danger">
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
          </div>
        </div>
      </main>
    </>
  );
};
export default Orders;
