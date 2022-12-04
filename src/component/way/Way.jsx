import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./way.css";

const Way = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="way" id="way" data-aos="fade-up">
      <div className="way-content">
        <h1>طريقة التسجيل</h1>
        <p>
          يجب سماع أول أربعة فيديوهات من هذا الكورس وكتابة الأكواد وتلخيص ما
          استفدته وبعدها تسجل كافة بياناتك وتحل الاختبار ولا
        نسمح بحل الاختبار بدون سماع الفيديوهات ولا أي وسيلة للغش. نرجو متابعة قناةالتيليجرام لمعرفة مواعيد الاختبار وكل ما هو جديد من أخبار المسابقة
        </p>

        <div className="way-content-buttons">
          <a
            target="_blank"
            rel="noreferrer"
            className="btn-green"
            href="https://www.youtube.com/watch?v=OvKCESUCWII&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V"
          >
            الكورس
          </a>
          <a
            className="btn-green"
            href="https://t.me/kalbonyan_elmarsos_contest_2"
            rel="noreferrer"
            target="_blank"
    
          >
            قناة التيليجرام
          </a>
        </div>
      </div>
    </section>
  );
};

export default Way;
