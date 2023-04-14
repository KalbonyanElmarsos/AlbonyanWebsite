import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsTerminalFill, BsPeopleFill } from "react-icons/bs";
import { GiTimeBomb } from "react-icons/gi";

import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about" id="about">
      <section className="about-container">
        <h1>عن المسابقة</h1>
        <div className="about-items">
          <div
            className="about-items-item green-item"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="about-items-flex-heading">
              <BsTerminalFill className="about-icon" />
              <h3>شروط المسابقة</h3>
            </div>
            <ol>
              <li>
                المسابقة للمبتدئين فإذا كنت ممن لهم باع في عالم البرمجة فهذه
                المسابقة ليست لك.
              </li>
              <li>
                المسابقة لا تشترط سن أو جنس او جنسية معينة فالمسابقة لجميع
                الأعمار طالما الهدف هو تعلم البرمجة سواء من أرادوا تغير مسارهم
                للبرمجة من عمل أخر أو طلاب أو خريجين ضلوا طريق التخطيط ويريدون
                منهج يبدي بهم من المجهول حتى يضعهم على الطريق.
              </li>
              <li>
                يجب مشاهدة جميع المواد الخاصة بالمسابقة من أولها إلى آخرها عند
                بدء. المسابقة حتى لو كنت شاهدت المادة العلمية من قبل حتى يتساوي
                الجميع عند البدء
              </li>
              <li>
                أي متقدم صاحب خبرة يدخل المسابقة للجوائز المادية سيتم رفضة
                فالغرض من المسابقة هي الأخذ بأيدي الشباب مع تحفيزهم على ذلك
                بمقابل مادي بسيط وليس الغرض الأساسي من المسابقةهي المادة فإذا
                أنعم الله عليك بالخبرة والعمل فلا تزاحم إخوتك الذين يريدون أن
                يلحقوا بك.
              </li>
            </ol>
          </div>
          <div className="about-items-flex">
            <div
              className="about-items-item white-item"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="about-items-flex-heading">
                <BsPeopleFill className="about-icon" />
                <h3>الشريحة المستهدفة</h3>
              </div>
              <ol>
                <li>الطلاب الجامعين الذين لم يتخرجوا.</li>
                <li>حديثي التخرج.</li>
                <li>
                  كل من يحاول تغيير مجالة إلى البرمجة. أي طالب يرغب في دخول مجال
                  البرمجة.
                </li>
              </ol>
            </div>
            <div
              className="about-items-item green-item"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="about-items-flex-heading">
                <GiTimeBomb className="about-icon" />
                <h3>مواعيد المسابقة </h3>
              </div>
              <ol>
                <li>
                  <span> الدفعة الأولي:</span> 10-2021 : 3-2022
                </li>
                <li>
                  <span> الدفعة الثانية:</span> 4-2021 : 9-2022
                </li>
                <li>
                  <span> الدفعة الثالثة:</span> 12-2022 : 7-2023
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
