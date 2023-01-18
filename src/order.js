import React, { useEffect } from "react";
import { ReadOrder } from "./action/index";
import axios from "axios";
import "./order.css";
import { useSelector, useDispatch } from "react-redux";
const Orders = () => {
  const orderdata = useSelector((state) => state.OrderData);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      restroid: localStorage.getItem("restroid"),
    };
    axios
      .post("https://sattasafari.com/restro/order/read.php", data)
      .then(function (response) {
        console.log(response.data);
        dispatch(ReadOrder(response.data));
      });
  }, []);
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
                  <div class="card-header ms-1 pb-0">
                    <div className="d-flex justify-content-between">
                      <h5 class="card-title text-primary">{el.client_name}</h5>
                      <h6 class="card-title text-danger">{el.status}</h6>
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
                          <tr>
                            <td className="px-3">{item.title}</td>
                            <td className="px-3">{item.qty}</td>
                            <td className="px-3">{item.price}</td>
                            <td className="px-3">{item.qty * item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
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
