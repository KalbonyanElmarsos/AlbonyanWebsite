import React from "react";
import "./Home.css";
import banner from "../../assest/banner.png";
import { BsTelegram, BsYoutube, BsLinkedin } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home ">
      <div className="home-content">
        <h1 className="gradient-text">
          مسابقة كالبنيان المرصوص <br />
          لتعلم البرمجة
        </h1>
        <p>
          فرصتك لدخول عالم البرمجة، في منهج تم اختباره على عناية حتى تبدأ بك من
          المجهول إلى أن تضعك على الطريق بإذن الله، و جعلنا من الجوائز ما يحفزك
          على الانتهاء من هذا المنهج، فإذا كنت من هؤلاء الذين شمروا ساعد الجد
          للأخذ بأسباب النجاح فالتحق معنا بركب المجتهدين واعلم انما نحن بالله ثم
          ببعضنا البعض وإنما نحن لبعض كالبنيان المرصوص
        </p>

        <div className="home-content-buttons">
          <a className="btn-gradient " href="/#about">
            عن المسابقة
          </a>

          <a className="btn-green" href="/#awards">
            جوائز المسابقة
          </a>
        </div>
        <div className="home-content-icons">
          <a className="home-content-icon">
            <BsTelegram />
          </a>
          <a className="home-content-icon">
            <BsYoutube />
          </a>
          <a className="home-content-icon">
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={banner} alt="banner of home page" />
      </div>
    </div>
  );
};

export default Home;
