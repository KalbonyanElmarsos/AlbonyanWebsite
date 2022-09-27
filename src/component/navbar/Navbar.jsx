import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assest/logo.png";
import "./navbar.css";

// links of navbar
const Menu = () => (
  <>
    <p>
      <a href="#about">عن المسابقة</a>
    </p>
    <p>
      <a href="#subject">المنهج</a>
    </p>
    <p>
      <a href="#awards">الجوائز</a>
    </p>
    <p>
      <a href="#tasks">تسليمات المسابقة</a>
    </p>
    <p>
      <a href="#way">طريقة التسجيل</a>
    </p>
    <p>
      <a href="#winner"> الفائزون</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
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
