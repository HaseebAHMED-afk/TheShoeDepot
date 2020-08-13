import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          TheShoeDepot™
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/nike" className="nav-link active" aria-current="page" >
                Nike
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/adidas' className="nav-link active" aria-current="page" >
                Adidas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reebok" className="nav-link active" aria-current="page" >
                Reebok
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/underarmour" className="nav-link active" aria-current="page">
                UnderArmour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
