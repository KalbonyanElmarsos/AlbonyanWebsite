import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tasks.css";
import taskBack from "../../assest/taskBack.png";
import logoOnTask from "../../assest/logoOnTask.png";

const Tasks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="tasks" id="tasks">
      <h1>اختبارات المسابقة</h1>
      <div className="tasks-contents">
        <div className="tasks-contents-images">
          <img
            src={taskBack}
            alt="hands of someone writing on computer"
            data-aos="fade-left"
            className="tasks-contents-images-task"
          />
          <img
            src={logoOnTask}
            alt="logo"
            className="tasks-contents-images-logo"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
        </div>
        <div className="tasks-contents-content">
          <ol data-aos="fade-up">
            <li>
              <h4>الاختبار الأول (بعد شهر من بداية المسابقة)</h4>
              <p> عمل مشروع كامل HTML,CSS</p>
            </li>
            <li>
              <h4>الاختبار الثاني (بعد ثلاثة أشهر من بداية المسابقة)</h4>
              <p> عمل مشروع كامل React </p>
            </li>
            <li>
              <h4>الاختبار الثالث (بعد خمسة أشهر من بداية المسابقة)</h4>
              <p>تسليمات المسابقة كاملة للوصول للاختبار النهائي </p>
              <ul>
                <li>
                  رفع كلاَ من التطبيقات العملية ولينك تشغليها والأكواد وشهادة كل
                  كورس علي ريبو كالبنيان المرصوص .
                </li>
                <li>
                  أربع شهادات من Udemy وشهادتان من Cloud Guru وعشر شهادات من
                  Linkedin Learning
                </li>
                <li>إنشاء Portfolio كهذا المثال .</li>
                <li>
                  إنشاء حساب Linkedin -إن لم يكن لديك ، وفيه كل المشاريع وكل
                  الشهادات .
                </li>
                <li>
                  إنشاء سيرة ذاتية كما في هذا الملف بكل الشهادات والمشاريع .
                </li>
              </ul>
            </li>
            <li>
              <h4>الاختبار الرابع ( النهائي )</h4>
              <p> عمل مشروع كامل MERN Stack </p>
            </li>
          </ol>
          <div className="tasks-contents-content-buttons">
            <a
              className="btn-green"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/KalbonyanElmarsos/Kalbonyan-Elmarsos"
            >
              Repo
            </a>
            <a
              className="btn-green"
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1sGWDB-Ee94LRqqeya_DlJLor9lG2i-47/edit"
            >
              cv
            </a>
            <a
              className="btn-green"
              rel="noreferrer"
              target="_blank"
              href="https://tarek-radwan.web.app/"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
