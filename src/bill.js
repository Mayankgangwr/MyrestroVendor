import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./bill.css";
import axios from "axios";
const Bill = () => {
  const params = useParams();
  const [billdata, setBilldata] = useState({});
  useEffect(() => {
    getOrd();
  }, []);
  function getOrd() {
    const restroid = localStorage.getItem("restroid");
    axios
      .get(
        `https://sattasafari.com/restro/order/single.php?ordid=${params.ordid}`
      )
      .then(function (response) {
        setBilldata(response.data[0]);
      });
  }
  return (
    <>
      <main style={{ marginTop: "58px" }}>
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="main-bill ms-auto me-auto mt-3">
              <h6 className="card-title text-center text-danger mt-1">
                {"  "}
                {`  Apna Pizza Center`}
              </h6>
              <hr />
              <div className="card-header ms-1 px-3 mt-4 pb-0">
                <div className="d-flex justify-content-between mt-2">
                  <h6 className="card-title text-center text-warning my-2">
                    {`Prince Kurmi`}
                  </h6>
                  <h6 className="card-title text-primary my-2">{`23/01/2023`}</h6>
                </div>
              </div>
              <div className="card-body py-2 mb-2">
                <table>
                  <thead>
                    <tr>
                      <td className="">
                        <b>Name</b>
                      </td>
                      <td className="">
                        <b>Qty</b>
                      </td>
                      <td className="">
                        <b>Price</b>
                      </td>
                      <td className="">
                        <b>Total</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">Hot Coffee</td>
                      <td className="">2</td>
                      <td className="">100</td>
                      <td className="">200</td>
                    </tr>
                    <tr>
                      <td className="">Veg Pizza</td>
                      <td className="">2</td>
                      <td className="">150</td>
                      <td className="">300</td>
                    </tr>
                    <hr />
                    <tr className="my-2">
                      <td className="">
                        <b>Qty</b>
                      </td>
                      <td className="">
                        <b>4</b>
                      </td>
                      <td className="">
                        <b>Amount</b>
                      </td>
                      <td className="">
                        <b>500</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Bill;
