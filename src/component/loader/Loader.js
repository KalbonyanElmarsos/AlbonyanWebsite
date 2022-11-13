import React from "react";
import "./loader.css";
import logo from "../../assest/logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-spinner">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
