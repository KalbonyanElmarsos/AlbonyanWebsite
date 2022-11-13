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
    <div data-aos="fade-up">
      <div className={`card  ${className}`}>
        <FaAward className="card-icon" />
        <h4>{title}</h4>
        <p>{award} </p>
      </div>
    </div>
  );
};

export default Card;
