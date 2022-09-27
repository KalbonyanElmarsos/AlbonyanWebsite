import React from "react";
import Icons from "../../tools/icons/Icons";
import "./footer.css";
import logo from "../../assest/logo.png";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} />
      <p>جميع الحقوق محفوظة© - 2022</p>
      {/* <div>
        <a>الأسئلة المكررة </a>
        <a className="footer-icon">
          <BsTelegram />
        </a>
      </div> */}

      <Icons className="footer-icons" />
    </div>
  );
};

export default Footer;
