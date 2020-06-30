import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container"></Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export { Header };
