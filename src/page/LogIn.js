import React from "react";
import "../stylesheet/login.scss";
import { Link } from "react-router-dom";
import Umbrella from "../material/umbrella.png";
import Tropical from "../material/trop.png";

const LogIn = () => {
  return (
    <div className="log-in-layout">
      <p></p>
      <div className="title-s">protect HUMAN, JANITOR,</div>
      <div className="title-s">and NATURE from COVID - 19 </div>

      <div className="title-b">AGAINST VARIANT CORONA</div>
      <img src={Tropical} />

      <input type="text" placeholder="로그인"></input>
      <input type="password" placeholder="   비밀번호"></input>
      <Link to="/mask-bin-client">
        <button>로그인</button>
        <button>카카오톡 회원가입</button>
      </Link>
    </div>
  );
};

export default LogIn;
