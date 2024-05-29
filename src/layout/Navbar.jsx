import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <h1 className="text-teal-700 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </div>
        </NavLink>
        <ul className="flex list-none items-center space-x-6 text-gray-800 text-xl font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.inactive;
            }}
          >
            <li className="curser-pointer">Home</li>
          </NavLink>
          <NavLink
            to={"/cart"}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.inactive;
            }}
          >
            <li className="curser-pointer">Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
