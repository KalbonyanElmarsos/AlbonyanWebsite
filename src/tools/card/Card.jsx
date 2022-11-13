import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./card.css";
import { FaAward } from "react-icons/fa";

const Card = ({ title, award, className }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`card  ${className}`} data-aos="fade-right">
      <FaAward className="card-icon" />
      <h4>{title}</h4>
      <p>{award} </p>
    </div>
  );
};

export default Card;
