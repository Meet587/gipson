import React, { useState } from "react";
import { Navbar } from "reactstrap";
import logo from "../../assets/img/logo.png";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function NavigationBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar1">
        <div className="left">
          <NavLink to={"/"}>
            <img src={logo} />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/">Contact Us</NavLink>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
