import React from "react";
import "../../tools/Cube";
import Cube from "../../tools/Cube";
import "./subject.css";

const Subject = () => {
  return (
    <div className="subject">
      <h1>منهج المسابقة</h1>
      <div className="subject-content">
        <Cube />
        <div className="subject-content-items">
          <div className="subject-content-items-item">
            <h3>Programing Fundamentals </h3>
            <div className="subject-content-items-item-links">
              <a
                href="https://www.linkedin.com/learning/programming-foundations-fundamentals-3/?resume=false"
                target="_blank"
              >
                Fundamentals
              </a>

              <a href="" target="_blank">
                Beyond the Fundamentals
              </a>

              <a href="" target="_blank">
                Object-Oriented Design
              </a>

              <a href="" target="_blank">
                Algorithms
              </a>

              <a href="" target="_blank">
                Data Structures
              </a>

              <a href="" target="_blank">
                Design Patterns
              </a>

              <a href="" target="_blank">
                Databases
              </a>

              <a href="" target="_blank">
                APIs and Web Services
              </a>

              <a href="" target="_blank">
                Software Testing/QA
              </a>

              <a href="" target="_blank">
                Learning GitHub
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>HTML & CSS</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                HTMl and CSS
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>Javascript</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                Javascript 1
              </a>

              <a href="" target="_blank">
                Javascript 2
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>React Js</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                ReactJs 1
              </a>

              <a href="" target="_blank">
                ReactJs2
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>AWS</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                Node Js 1
              </a>

              <a href="" target="_blank">
                Node Js 2
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>SST</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                Node Js 1
              </a>
            </div>
          </div>
          <div className="subject-content-items-item">
            <h3>Node Js</h3>
            <div className="subject-content-items-item-links">
              <a href="" target="_blank">
                Node Js 1
              </a>

              <a href="" target="_blank">
                Node Js 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
