import React from "react";
import { BsTelegram, BsYoutube, BsLinkedin } from "react-icons/bs";
import "./icons.css";
const Icons = () => {
  return (
    <div className="icons">
      <a target="_blank" href="https://t.me/kalbonyan_elmarsos_contest_2">
        <BsTelegram className="icon" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCG-wLtNfSTg742SiH7Lne1Q"
      >
        <BsYoutube className="icon" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/"
      >
        <BsLinkedin className="icon" />
      </a>
    </div>
  );
};

export default Icons;
