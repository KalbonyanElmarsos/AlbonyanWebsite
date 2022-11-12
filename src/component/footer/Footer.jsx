import React from "react";
import Icons from "../../tools/icons/Icons";
import "./footer.css";
import logo from "../../assest/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <p>جميع الحقوق محفوظة© - 2022</p>
     

      <Icons className="footer-icons" />
    </div>
  );
};

export default Footer;
