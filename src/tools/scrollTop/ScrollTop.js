import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { TiArrowUpThick } from "react-icons/ti";
import "./scrolltop.css";

const ScrollTop = () => {
  return (
    <div>
      <ScrollToTop
        className="scroll"
        smooth
        component={<TiArrowUpThick className="up-icon" />}
      />
    </div>
  );
};

export default ScrollTop;
