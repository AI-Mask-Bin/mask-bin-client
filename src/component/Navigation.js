import React from "react";
import { Link } from "react-router-dom";
import Addpoint3 from "../material/addpoint3.png";
import Getmask1 from "../material/getmask1.png";
import "../stylesheet/navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/addpointqr">
        <img className="ADDPOINTQR" src={Addpoint3} alt="button" />
      </Link>
      <Link to="/getmaskqr" className="nav2">
        <img className="GETMASKQR" src={Getmask1} alt="button" />
      </Link>
    </div>
  );
};

export default Navigation;
