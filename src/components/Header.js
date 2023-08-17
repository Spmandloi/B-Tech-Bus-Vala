import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BsPersonFill, BsPerson } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-left">
            <h1 className="navbar-brand">
              <Link to={'/'} className="nav-link">
                B-Tech-Bus-Vala
              </Link>
            </h1>
          </div>

          <div className="navbar-right">
            <Link to={'/booking-details'} className="nav-link">
              Booking Details
            </Link>

            <div className="dropdown">
              <span className="nav-link dropdown-toggle" role="button" id="adminDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BsPersonFill /> Admin
              </span>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="adminDropdown">
                <Link to={'/create-bus'} className="dropdown-item">Add New Bus</Link>
                <Link to={'/bus-list'} className="dropdown-item">List Of All Buses</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-link dropdown-toggle" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <BsPerson /> User
              </span>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <Link to={'/login'} className="dropdown-item">Login</Link>
                <Link to={'/register'} className="dropdown-item">Signup</Link>
                <Link to={'/booking'} className="dropdown-item">Booking</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

