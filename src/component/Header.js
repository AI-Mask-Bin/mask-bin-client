import React from "react";
import { Link } from "react-router-dom";
import Logo4M from "../material/LOGO4_mob.png";
import Logout from "../material/logout.png";
import "../stylesheet/header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo4M} alt="logo" />
      </Link>
      <Link to="/login">
        <div className="logout-button">
          {/* <img src={Logout} alt="logout" /> */}
          <div className="box">
            <p>로그아웃</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
