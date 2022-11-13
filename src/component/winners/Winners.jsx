import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbArrowBigLeftLines } from "react-icons/tb";
import winners from "../../assest/winners/winners.png";

import "./winners.css";
import { Link } from "react-router-dom";

const Winners = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="winners" id="winner">
      {/* <h1>الفائزون بالمسابقة</h1> */}
      <img src={winners} alt=" winners" data-aos="fade-left" />
      <Link
        className="btn-gradient winners-link"
        to="/kalbonyanElmarsosWebsite/winners"
        data-aos="fade-up"
      >
        <p>الذهاب إلي الفائزين والخريجين من المسابقة</p>
        <TbArrowBigLeftLines className="winners-arrow-icon" />
      </Link>
    </section>
  );
};

export default Winners;