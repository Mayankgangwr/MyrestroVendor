import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Loginform = () => {
  useEffect(() => {
    if (localStorage.getItem("restrotitle") !== null) {
      navigate("/dashboard");
    }
  }, []);
  const formdata = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    userid: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    axios
      .post("https://sattasafari.com/restro/login.php", data)
      .then(function (response) {
        if (response.data.message == "200") {
          alert("You have Login SuccessFully");
          window.localStorage.setItem("restroid", response.data.restroid);
          window.localStorage.setItem("restrotitle", response.data.restrotitle);
          navigate("/dashboard");
        } else {
          alert("Enter Your Correct Login Details");
        }
      });
  };
  return (
    <>
      <div className="container">
        <section class="background-radial-gradient overflow-hidden">
          <div class="container px-lg-4 py-lg-5  px-md-5 text-center text-lg-start my-lg-5">
            <div class="row gx-lg-5 align-items-center mb-5">
              <div class="col-lg-7 mb-lg-5 mb-lg-0" style={{ zIndex: "10" }}>
                <h1
                  class="my-5 display-5 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  India's first Free QR Ordring
                  <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    And POS Software
                  </span>
                </h1>
              </div>

              <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  class="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  class="position-absolute shadow-5-strong"
                ></div>

                <div class="card bg-glass">
                  <div class="card-body px-4 py-lg-5 px-md-5">
                    <form onSubmit={Login}>
                      <div class="row">
                        <h1 className="text-center mb-5">MyRestro</h1>
                        <div class="col-12s mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="userid"
                              value={data.userid}
                              onChange={handleChange}
                              placeholder="Enter Username"
                              class="form-control border border-dark"
                            />
                          </div>
                        </div>
                        <div class="col-12s mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              name="password"
                              value={data.password}
                              onChange={handleChange}
                              placeholder="Enter Password"
                              class="form-control border border-dark"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Loginform;
