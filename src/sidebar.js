import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
function Sidebar() {
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    var emaildata = localStorage.getItem("restrotitle");
    setAuth(emaildata);
    if (localStorage.getItem("restrotitle") === null) {
      navigate("/");
    }
  });
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
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mt-1">
              <NavLink
                exact
                activeClassName="active py-2"
                to="/dashboard"
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
                to="/order/pending"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Pending Order</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order/accepted"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Accepted Order</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order/ready"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Ready Order</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order/ontable"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Order On Table</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order/complete"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Complete Orders</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/order"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/order.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">All Orders</span>
              </NavLink>

              <NavLink
                activeClassName="active"
                to="/categories"
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
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/product.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Products</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/user.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Profile</span>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/settings"
                className="list-group-item list-group-item-action side-item-p ripple"
              >
                <img
                  src="https://s3uk4s-3000.preview.csb.app/images/settings.png"
                  width="18"
                  className="sidebar-icon"
                />
                <span className="font-size">Settings</span>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="22"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a onClick={LogOut} className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
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
