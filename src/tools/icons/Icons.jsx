import React from "react";
import { BsTelegram, BsYoutube, BsLinkedin } from "react-icons/bs";
import "./icons.css";
const Icons = () => {
  return (
    <div className="icons">
      <a href="">
        <BsTelegram className="icon" />
      </a>
      <a href="">
        <BsYoutube className="icon" />
      </a>
      <a href="">
        <BsLinkedin className="icon" />
      </a>
    </div>
  );
};

export default Icons;
