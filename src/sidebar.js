import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  const [auth, setAuth] = useState("");
  const [hideshow, setHideshow] = useState("d-none");
  const navigate = useNavigate();
  useEffect(() => {
    var emaildata = localStorage.getItem("restrotitle");
    setAuth(emaildata);
    if (localStorage.getItem("restrotitle") === null) {
      navigate("/");
    }
  });
  const handleSidebar = () => {
    if (hideshow === "d-none") {
      setHideshow("d-block");
    } else {
      setHideshow("d-none");
    }
  };
  const LogOut = () => {
    localStorage.removeItem("restrotitle");
    localStorage.removeItem("restroid");
    navigate("/");
  };

  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          className={`collapse d-lg-block sidebar collapse bg-white ${hideshow}`}
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mt-1">
              <NavLink
                activeClassName="active py-2"
                to="/dashboard"
                onClick={handleSidebar}
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/dashboard.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Dashboard</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order"
                onClick={handleSidebar}
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Orders</span>
              </NavLink>

              <NavLink
                activeClassName="active"
                to="/categories"
                onClick={handleSidebar}
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/category.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Categories</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/products"
                onClick={handleSidebar}
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/product.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Products</span>
              </NavLink>
            </div>
          </div>
        </nav>
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleSidebar}
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" href="#">
              <img
                src="https://s3uk4s-3000.preview.csb.app/images/logo.png"
                height="30"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item">
                <button onClick={LogOut} className="btn btn-primary">
                  <i class="fas fa-sign-out-alt"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Sidebar;
