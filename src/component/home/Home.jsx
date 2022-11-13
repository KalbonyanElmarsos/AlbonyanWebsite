import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import banner from "../../assest/banner.png";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home ">
      <div className="home-content">
        <h1 data-aos="fade-left" className="gradient-text">
          مسابقة كالبنيان المرصوص <br />
          لتعلم البرمجة
        </h1>
        <p data-aos="fade-up">
          فرصتك لدخول عالم البرمجة، في منهج تم اختباره على عناية حتى تبدأ بك من
          المجهول إلى أن تضعك على الطريق بإذن الله، و جعلنا من الجوائز ما يحفزك
          على الانتهاء من هذا المنهج، فإذا كنت من هؤلاء الذين شمروا ساعد الجد
          للأخذ بأسباب النجاح فالتحق معنا بركب المجتهدين واعلم انما نحن بالله ثم
          ببعضنا البعض وإنما نحن لبعض كالبنيان المرصوص
        </p>

        <div className="home-content-buttons">
          <a className="btn-gradient " href="#about">
            عن المسابقة
          </a>

          <a className="btn-green" href="#awards">
            جوائز المسابقة
          </a>
        </div>
      </div>
      <div data-aos="fade-right" className="home-img">
        <img src={banner} alt="banner of home page" />
      </div>
    </div>
  );
};

export default Home;
