import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assest/logo.png";
import "./navbar.css";

// links of navbar
const Menu = () => {
  return (
    <>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#about">عن المسابقة</HashLink>
      </p>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#subject">المنهج</HashLink>
      </p>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#awards">الجوائز</HashLink>
      </p>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#tasks">
          اختبارات المسابقة
        </HashLink>
      </p>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#way">طريقة التسجيل</HashLink>
      </p>
      <p>
        <HashLink to="/kalbonyanElmarsosWebsite/#winner">الفائزون</HashLink>
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
