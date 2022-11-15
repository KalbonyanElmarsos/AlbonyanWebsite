import React from "react";
import { BsLinkedin } from "react-icons/bs";
import "./cardTeam.css";

const CardTeam = ({ image, name, linkedInLink }) => {
  return (
    <div className="cardTeam">
      <img src={image} alt={name} loading="lazy" />
      <p>{name}</p>
      {/* <a href={linkedInLink} target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a> */}
    </div>
  );
};

export default CardTeam;
