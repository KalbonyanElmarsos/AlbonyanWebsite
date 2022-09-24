import React from "react";
import "./Home.css";
import banner from "../../assest/banner.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="gradient-text">
          مسابقة كالبنيان المرصوص <br />
          لتعلم البرمجة
        </h1>
        <p>طريقك لعمل موقع ويب كامل في خلال خمسة شهور </p>
        <div className="home-content-buttons">
          <a className="btn " href="/#about">
            عن المسابقة
          </a>

          <a className="btn" href="/#awards">
            جوائز المسابقة
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
