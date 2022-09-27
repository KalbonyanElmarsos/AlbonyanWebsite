import React from "react";

import "./way.css";

const Way = () => {
  return (
    <section className="way" id="way">
      <div className="way-content">
        <h1>طريقة التسجيل</h1>
        <p>
          يجب سماع الكورس الأول كاملاَ وكتابة الأكواد وتلخيص ما استفدته من
          الكورس في ملف pdf وبعدها تسجل كافة بياناتك وتحل الاختبار في هذا
          الاستبيان
        </p>

        <div className="way-content-buttons">
          <a
            target="_blank"
            className="btn-green"
            href="https://www.linkedin.com/learning/programming-foundations-fundamentals-3?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
          >
            الكورس الأول
          </a>
          <a className="btn-green" href="">
            الاستبيان
          </a>
        </div>
      </div>
    </section>
  );
};

export default Way;
