import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cardWinners.css";

const CardWinners = ({ image, name, linkedInLink }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="CardWinners" data-aos="fade-up">
      <img src={image} alt={name} />
      <p>{name}</p>
      <a href={linkedInLink} target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default CardWinners;
