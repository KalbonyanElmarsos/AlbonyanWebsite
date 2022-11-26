import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assest/notfoundPage.png";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1>عذراً هذه الصفحة غير موجودة </h1>
      <img src={notFound} alt="design of 404" />
      <Link className="btn-green" to="/">
        الذهاب إلي الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFoundPage;
