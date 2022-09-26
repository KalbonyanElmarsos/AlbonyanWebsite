import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import "./cube.css";

const Cube = () => {
  return (
    <div className="cube">
      <div className="cube-spinner">
        <div className="face1">
          <FaNodeJs />
        </div>
        <div className="face2">
          <AiFillHtml5 />
        </div>
        <div className="face3">
          <SiCss3 />
        </div>
        <div className="face4">
          <SiReact />
        </div>
        <div className="face5">
          <SiJavascript />
        </div>
        <div className="face6">
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default Cube;
