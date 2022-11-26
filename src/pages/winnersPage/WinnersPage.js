import React from "react";
import CardWinners from "../../tools/cardWinners/CardWinners";
import AhmedMansour from "../../assest/winners/AhmedMansour.jpg";
import AhmedSamir from "../../assest/winners/AhmedSamir.jpg";
import FetianAnas from "../../assest/winners/FetianAnas.jpg";
import mansourKoura from "../../assest/winners/mansourKoura.jpg";
import MohamedTanash from "../../assest/winners/MohamedTanash.jpg";
import YousefMohamed from "../../assest/winners/YousefMohamed.jpg";
import Abdelraman from "../../assest/winners/abdelrahmAhmed.jpg";
import AbdelramanHagras from "../../assest/winners/abderlahmanHagrasy.jpg";
import AliNabil from "../../assest/winners/aliNabil.jpg";
import AhmedMohamed from "../../assest/winners/ahmedMohamed.jpg";
import AhmedEid from "../../assest/winners/ahmedEid.jpg";
import AhmedHany from "../../assest/winners/ahmedHany.jpg";
import SalahMohamed from "../../assest/winners/salahMohamed.png";
import omerSherif from "../../assest/winners/omerSherif.jpg";
import mohamedEldaher from "../../assest/winners/mohamedEldaher.jpg";
import mostafaHamdy from "../../assest/winners/mostafahamdy.jpg";
import yehia from "../../assest/winners/yehia.jpg";
import yousefTarek from "../../assest/winners/yousefTarek.jpg";
import mohamedSaid from "../../assest/winners/mohamedSaid.jpg";
import mahmoudFarag from "../../assest/winners/mahmoudFarag.jpg";
import mahmoudKhaled from "../../assest/winners/mahmoudkaled.jpg";
import anasYousef from "../../assest/winners/anasYoussef.jpg";
import mahmoudMohamed from "../../assest/winners/mahmoud05.jpg";
import YousefShaban from "../../assest/winners/yousefShaban.jpg";
import AmmarSaied from "../../assest/winners/ammarSaied.jpg";
import Abdallah from "../../assest/winners/abdallah.jpg";
import Torky from "../../assest/winners/torky.jpg";
import amrHidden from "../../assest/winners/amrHidden.jpg";
import Flower from "../../assest/winners/flower.jpg";
import niqapgirl from "../../assest/winners/nigabGril.jpg";

import "./winnerPage.css";

const WinnersPage = () => {
  return (
    <section className="winnersPage">
      <h1>الفائزون من الدفعة الأولي </h1>
      <div className="winnersPage-content">
        <CardWinners
          image={YousefMohamed}
          name="يوسف محمد"
          linkedInLink="https://www.linkedin.com/in/yousefdergham/"
        />
        <CardWinners
          image={mansourKoura}
          name="منصور قورة"
          linkedInLink="https://www.linkedin.com/in/manssorr/"
        />
        <CardWinners
          image={AhmedMansour}
          name="أحمد منصور"
          linkedInLink="https://www.linkedin.com/in/ahmed-mansour-06b099ba/"
        />
        <CardWinners
          image={AhmedSamir}
          name="أحمد سمير"
          linkedInLink="https://www.linkedin.com/in/ahmedsamir-dev/"
        />
        <CardWinners
          image={FetianAnas}
          name="فتيان أنس"
          linkedInLink="https://www.linkedin.com/in/fetian-ans-abohatb/"
        />

        <CardWinners
          image={MohamedTanash}
          name="محمد طنش"
          linkedInLink="https://www.linkedin.com/in/mohamed-tanash/"
        />
      </div>
      {/*  */}
      <h1>الفائزون من الدفعة الثانية </h1>
      <div className="winnersPage-content">
        <CardWinners
          image={Abdelraman}
          name="عبدالرحمن أحمد "
          linkedInLink="https://www.linkedin.com/in/abdelrahman-ahmed-kamal/"
        />
        <CardWinners
          image={AbdelramanHagras}
          name="عبدالرحمن هجرسي"
          linkedInLink="https://www.linkedin.com/in/abdolrahman-saleh-elhagrasy-9b394a221/"
        />
        <CardWinners
          image={AliNabil}
          name="علي نبيل"
          linkedInLink="https://www.linkedin.com/in/alinabil97/"
        />
        <CardWinners
          image={Flower}
          name="مروة محمد "
          linkedInLink="https://www.linkedin.com/in/marwa-mohamed-bb1177237/"
        />
        <CardWinners
          image={Flower}
          name="نجوان حجازي"
          linkedInLink="https://www.linkedin.com/in/najwan-hijazy/"
        />
      </div>
      {/*  */}
      <h1>الخريجون من الدفعة الثانية </h1>
      <div className="winnersPage-content">
        <CardWinners
          image={AhmedMohamed}
          name="أحمد محمد"
          linkedInLink="https://www.linkedin.com/in/ahmed-mohamed-859802210/"
        />
        <CardWinners
          image={AhmedEid}
          name="أحمد عيد"
          linkedInLink="https://www.linkedin.com/in/ahmed-eid-568051229/"
        />
        <CardWinners
          image={AhmedHany}
          name="أحمد هاني"
          linkedInLink="https://www.linkedin.com/in/ahemd-hany-9bb233214/"
        />
        <CardWinners
          image={SalahMohamed}
          name="صلاح محمد"
          linkedInLink="https://www.linkedin.com/in/salah-mohamed-1649b0234/"
        />
        <CardWinners
          image={Abdallah}
          name="عبدالله النشار"
          linkedInLink="https://www.linkedin.com/in/abdallah-elnashar-154a79190/"
        />
        <CardWinners
          image={omerSherif}
          name="عمر شريف"
          linkedInLink="https://www.linkedin.com/in/osbdev/"
        />
        <CardWinners
          image={amrHidden}
          name="عمرو عزت"
          linkedInLink="https://www.linkedin.com/in/amrya200t/"
        />
        <CardWinners
          image={Flower}
          name=" فاطمة الزهراء"
          linkedInLink="https://www.linkedin.com/in/fatema-elzhraa-attia-sadek-mohammed-abu-el-enene-778791200/"
        />
        <CardWinners
          image={mohamedEldaher}
          name="محمد الضاهر"
          linkedInLink="https://www.linkedin.com/in/mohammed-aldaher-9a834b206/"
        />
        <CardWinners
          image={mostafaHamdy}
          name="  مصطفي حمدي"
          linkedInLink="https://www.linkedin.com/in/mostafa-hamdy-5b793b206/"
        />
        <CardWinners
          image={yehia}
          name="يحيي شعبان"
          linkedInLink="https://www.linkedin.com/in/yehya-shaaban-b87a2b234/"
        />
        <CardWinners
          image={yousefTarek}
          name="يوسف طارق"
          linkedInLink="https://www.linkedin.com/in/yousef-tarek-091a36234/"
        />
        <CardWinners
          image={mohamedSaid}
          name="محمد سعيد"
          linkedInLink="https://www.linkedin.com/in/mohamed-said-5a599b234/"
        />
        <CardWinners
          image={mahmoudFarag}
          name="محمود فرج"
          linkedInLink="https://www.linkedin.com/in/mahmoud-farag-4346a4162"
        />
        <CardWinners
          image={Torky}
          name="تركي العماري"
          linkedInLink="https://www.linkedin.com/in/turki-badr-526989234/"
        />
        <CardWinners
          image={mahmoudKhaled}
          name="محمود خالد"
          linkedInLink="https://www.linkedin.com/in/mahmoud-khalid-abusamra/"
        />
        <CardWinners
          image={anasYousef}
          name=" أنس يوسف"
          linkedInLink="https://www.linkedin.com/in/anas-youssef-29339b225"
        />
        <CardWinners
          image={mahmoudMohamed}
          name="محمود محمد"
          linkedInLink="https://www.linkedin.com/in/mahmoud05"
        />

        <CardWinners
          image={niqapgirl}
          name="فاطمة علي"
          linkedInLink="https://www.linkedin.com/in/fatma-aly-89bb37111"
        />
        <CardWinners
          image={YousefShaban}
          name="يوسف شعبان"
          linkedInLink="https://www.linkedin.com/in/yosif-shaaban-a3190921a/"
        />
        <CardWinners
          image={AmmarSaied}
          name="عمار سيد"
          linkedInLink="https://www.linkedin.com/in/ammarsayed/"
        />
      </div>
    </section>
  );
};

export default WinnersPage;
