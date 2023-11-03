import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <AiFillCar />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};
