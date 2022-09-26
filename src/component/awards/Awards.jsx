import React from "react";
import Card from "../../tools/card/Card";
import "./awards.css";
// import { FaAward } from "react-icons/fa";

const Awards = () => {
  return (
    <section className="awards" id="awards">
      <h1>الجوائز</h1>
      <div className="awards-cards">
        <Card className="awards-cards-1" title="  الأول" award="10000جـ" />
        <Card className="awards-cards-2" title="الثاني" award="8000جـ" />
        <Card className="awards-cards-3" title="الثالث" award="6000جـ" />
        <Card className="awards-cards-4" title="الرابع" award="4000جـ" />
        <Card className="awards-cards-5" title="الخامس" award="2000جـ" />
      </div>
    </section>
  );
};

export default Awards;
