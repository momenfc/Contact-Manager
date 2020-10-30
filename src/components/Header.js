import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
      <div className="container">
        <Link to="/NotFound" className="navbar-brand">
          {" "}
          {brand}{" "}
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/add" className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: "Altayer",
};

export default Header;
