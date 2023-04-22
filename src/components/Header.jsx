import "./header.css";
import logo from "./../assets/logo.png";
import back from "./../assets/back.png";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Header = ({ type }) => {
  return (
    <div className="Header-Container">
      <div className="Header-icons">
        <div className="Header-icons-container">
          {!type && (
            <>
              <img src={logo} alt="LOGO" />
              <span>Sacred Earth Cafe</span>
            </>
          )}
          {type && (
            <>
              <NavLink
                to="/special"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={back} />
              </NavLink>
              <span>Place Order!!!!!!</span>
            </>
          )}
        </div>
        <div className="Header-icons-search">
          <BiSearchAlt />
        </div>
      </div>
      {!type && (
        <div className="Header-tabs">
          <li>
            <NavLink to="/special">Special</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
          <li>
            <NavLink to="/beverages">Beverages</NavLink>
          </li>
          <li>
            <NavLink to="/desserts">Desserts</NavLink>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
