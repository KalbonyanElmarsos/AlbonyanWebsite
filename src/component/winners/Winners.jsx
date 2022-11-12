import React from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import CardWinners from "../../tools/cardWinners/CardWinners";
import winners from "../../assest/winners/winners.png";

import "./winners.css";
import { Link } from "react-router-dom";

const Winners = () => {
  return (
    <section className="winners" id="winner">
      {/* <h1>الفائزون بالمسابقة</h1> */}
      <img src={winners} alt=" winners" />
      <Link className="btn-gradient winners-link" to="/winners">
        <p>الذهاب إلي الفائزين والخريجين من المسابقة</p>
        <TbArrowBigLeftLines className="winners-arrow-icon" />
      </Link>
    </section>
  );
};

export default Winners;
