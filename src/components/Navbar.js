import React from "react";
import { COLORS } from "../COLORS";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/OJ_logo.svg";

const NavItem = ({ link, label }) => {
  return (
    <li className="d-inline-block d-md-block nav-item mx-2 my-sm-2">
      <NavLink
        exact
        to={link}
        className="nav-link custom-nav-link pb-2"
        style={{ textDecoration: "none", color: "#fff" }}
        activeClassName="custom-active-nav-link"
        // data-toggle="collapse"
        // data-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        {label}
      </NavLink>
    </li>
  );
};

const navList = [
  { label: "Home", link: "/" },
  { label: "Education", link: "/education" },
  { label: "Experience", link: "/experience" },
  { label: "Projects", link: "/project" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark custom-nav"
      style={{
        backgroundColor: COLORS.backgroundColor,
        boxShadow: "0px 2px 10px",
      }}
    >
      <div className="container-fluid">
        {/* <span
          className="navbar-brand h1 mb-0"
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          OJ
        </span> */}
        <Link exact to="/">
          <img
            src={logo}
            height="50"
            width="50"
            style={{ borderRadius: 25 }}
            alt="Logo"
            className="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon navbar-toggle-btn"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto ">
            {navList.map((item, index) => (
              <NavItem label={item.label} link={item.link} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
