import React from "react";
import CardWinners from "../../tools/cardWinners/CardWinners";
import AhmedMansour from "../../assest/winners/AhmedMansour.jpg";
import AhmedSamir from "../../assest/winners/AhmedSamir.jpg";
import FetianAnas from "../../assest/winners/FetianAnas.jpg";
import mansourKoura from "../../assest/winners/mansourKoura.jpg";
import MohamedTanash from "../../assest/winners/MohamedTanash.jpg";
import YousefMohamed from "../../assest/winners/YousefMohamed.jpg";
import "./winners.css";

const Winners = () => {
  return (
    <section className="winners" id="winner">
      <h1>الفائزون بالمسابقة</h1>
      <div className="winners-content">
        <CardWinners
          image={AhmedMansour}
          name="Ahmed Mansour"
          linkedInLink="https://www.linkedin.com/in/ahmed-mansour-06b099ba/"
        />
        <CardWinners
          image={AhmedSamir}
          name="Ahmed Samir"
          linkedInLink="https://www.linkedin.com/in/ahmedsamir-dev/"
        />
        <CardWinners
          image={FetianAnas}
          name="Fetian Anas"
          linkedInLink="https://www.linkedin.com/in/fetian-ans-abohatb/"
        />
        <CardWinners
          image={mansourKoura}
          name="Mansour Koura"
          linkedInLink="https://www.linkedin.com/in/manssorr/"
        />
        <CardWinners
          image={YousefMohamed}
          name="Yousef Mohamed"
          linkedInLink="https://www.linkedin.com/in/yousefdergham/"
        />
        <CardWinners
          image={MohamedTanash}
          name="Mohamed Tanash"
          linkedInLink="https://www.linkedin.com/in/mohamed-tanash/"
        />
      </div>
    </section>
  );
};

export default Winners;
