import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.png";
import "./navbar.css";

// links of navbar
const Menu = () => {
  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#about">عن المسابقة</Link>
      </p>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#subject">المنهج</Link>
      </p>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#awards">الجوائز</Link>
      </p>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#tasks">تسليمات المسابقة</Link>
      </p>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#way">طريقة التسجيل</Link>
      </p>
      <p>
        <Link to="/kalbonyanElmarsosWebsite/#winner">الفائزون</Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/kalbonyanElmarsosWebsite">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up">
            <div className="navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
