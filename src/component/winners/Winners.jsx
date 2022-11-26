import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbArrowBigLeftLines } from "react-icons/tb";
import winners from "../../assest/winners/winners.png";
import "./winners.css";

const Winners = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="winners" id="winner">
      {/* <h1>الفائزون بالمسابقة</h1> */}
      {/* {window.innerWidth < 600 ? (
        <ReactImageZoom
          width="400"
          zoomWidth="500"
          zoomPosition="top"
          img={winners}
        />
      ) : (
        <img src={winners} alt=" winners" data-aos="fade-left" />
      )} */}
      <img src={winners} alt=" winners" data-aos="fade-left" />
      <Link className="btn-gradient winners-link" to="/winners">
        <p>الذهاب إلي الفائزين والخريجين من المسابقة</p>
        <TbArrowBigLeftLines className="winners-arrow-icon" />
      </Link>
    </section>
  );
};

export default Winners;
