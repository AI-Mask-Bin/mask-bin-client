import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo4M from "../material/LOGO4_mob.png";
import "../stylesheet/header.scss";
const Header = () => {
  const history = useHistory();
  const [isLoginPage, setIsLoginPage] = useState(false);
  useEffect(() => {
    history.listen((location) => {
      const isLoginPage = location.pathname === "/login";

      setIsLoginPage(isLoginPage);
    });
  }, [history]);

  const showAlert = () => {
    alert("서비스 준비중입니다.");
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo4M} alt="logo" />
      </Link>
      {isLoginPage ? (
        <div class="sign-up" onClick={showAlert}>
          <div className="logout-button">
            <div className="box">
              <p>회원가입</p>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <div className="logout-button">
            <div className="box">
              <p>로그아웃</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
