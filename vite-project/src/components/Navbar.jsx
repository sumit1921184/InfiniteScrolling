// Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const handleMouseEnter = () => setOpenMegaMenu(true);
  const handleMouseLeave = () => setOpenMegaMenu(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyStore</Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        {/* Mega Menu */}
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/shop">Shop</NavLink>
          {openMegaMenu && (
            <div className="mega-menu">
              <div className="mega-menu-content">
                <div className="column">
                  <h4>Category 1</h4>
                  <ul>
                    <li>
                      <NavLink to="/shop/subcategory1.1">Subcategory 1.1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop/Subcategory1.2">Subcategory 1.2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop/Subcategory1.3">Subcategory 1.3</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Category 2</h4>
                  <ul>
                    <li>
                      <NavLink to="/shop/category2">Subcategory 2.1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop/category2">Subcategory 2.2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop/category2">Subcategory 2.3</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;