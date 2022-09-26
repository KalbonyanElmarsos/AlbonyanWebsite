import React from "react";
import "./subject.css";

const Subject = () => {
  return (
    <div className="subject">
      <h1>منهج المسابقة</h1>
      <table class="subject-container">
        <thead>
          <tr>
            <th>م </th>
            <th>الكورس</th>
            <th>المنصة</th>
            <th>عدد الساعات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn Programming Foundations
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <a href="">Programming Foundations: Fundamentals</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="">Programming Foundations: Beyond the Fundamentals</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="">Programming Foundations: Object-Oriented Design</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="">Programming Foundations: Data Structures</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="">Programming Foundations: Algorithms</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a href="">Programming Foundations: Design Patterns</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a href="">Programming Foundations: Databases</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <a href="">Programming Foundations: APIs and Web Services</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <a href="">Programming Foundations: Software Testing/QA</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <a href="">Learning GitHub</a>
            </td>
            <td>Linkedin Learning</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn HTML and CSS
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <a href="">
                Build Responsive Real-World Websites with HTML and CSS
              </a>
            </td>
            <td>Udemy</td>
            <td>2h 6m 40s</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn JavaScript
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="">The Modern JavaScript Bootcamp</a>
            </td>
            <td>Udemy</td>
            <td>29h 30m</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <a href="">
                The Complete JavaScript Course 2022: From Zero to Expert!
              </a>
            </td>
            <td>Udemy</td>
            <td>69h</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn React Js
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </a>
            </td>
            <td>Udemy</td>
            <td>48h</td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <a href="">
                Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
              </a>
            </td>
            <td>Udemy</td>
            <td>39h</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn Node Js
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="">The Complete Node.js Developer Course (3rd Edition)</a>
            </td>
            <td>Udemy</td>
            <td>35h</td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <a href="">
                Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)
              </a>
            </td>
            <td>Udemy</td>
            <td>46h</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn How to Deploy your web applications with Cloud Provider
              (AWS) Learn React Js
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <a href="">AWS Certified Cloud Practitioner (CLF-C01)</a>
            </td>
            <td>Udemy</td>
            <td>16h</td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <a href="">
                AWS Certified Solutions Architect Associate (SAA-C02)
              </a>
            </td>
            <td>Udemy</td>
            <td>42h</td>
          </tr>
          <tr>
            <td className="subject-container-colspan" colspan="4">
              Learn How to Make serverless web applications
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <a href="">Serverless Stack (SST)</a>
            </td>
            <td>Udemy</td>
            <td>10h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subject;

/*           <div className="subject-content">
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
      </div>   */
