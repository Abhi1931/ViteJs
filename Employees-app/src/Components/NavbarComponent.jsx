import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Employee App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Departments
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/sales">Sales</Link>
                  <Link className="dropdown-item" to="/developers">Developers</Link>
                  <Link className="dropdown-item" to="/testers">Testers</Link>
                  <Link className="dropdown-item" to="/managers">Managers</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-new">Add Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;