import React from "react";
import "./card.css";
import { FaAward } from "react-icons/fa";

const Card = ({ title, award, className }) => {
  return (
    <div className={`card  ${className}`}>
      <FaAward className="card-icon" />
      <h4>{title}</h4>
      <p>{award} </p>
    </div>
  );
};

export default Card;
