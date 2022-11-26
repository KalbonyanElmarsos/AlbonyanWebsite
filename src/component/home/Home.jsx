import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import manBackground from "../../assest/manBackground.png";
import man from "../../assest/man.png";
import logoOnMan from "../../assest/logoOnMan.png";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="home ">
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

      <div className="home-img" data-aos="fade-up">
        <img
          className="home-img-background"
          src={manBackground}
          alt="background of man"
          data-aos="fade-down"
          data-aos-duration="3000"
        />
        <img
          className="home-img-man"
          src={man}
          alt="man writing on computer "
          data-aos="fade-right"
        />
        <img
          className="home-img-logo"
          src={logoOnMan}
          alt="logo"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default Home;
