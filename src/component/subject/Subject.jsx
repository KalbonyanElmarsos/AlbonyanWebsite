import React, { useState } from "react";
import TrCourse from "../../tools/trCourse/TrCourse";
import TrTitle from "../../tools/trTitle/TrTitle";
import "./subject.css";

const Subject = () => {
  const [open, setOpen] = useState(false);

  const switchMode = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <section className="subject" id="subject">
      <h1>منهج المسابقة</h1>
      {/* table */}
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
          <TrTitle title="Learn Programming Foundations" />
          <TrCourse
            number="1"
            link="https://www.linkedin.com/learning/programming-foundations-fundamentals-3?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Fundamentals"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="2"
            link="https://www.linkedin.com/learning/programming-foundations-beyond-the-fundamentals?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Beyond the Fundamentals"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="3"
            link="https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3"
            name="Object-Oriented Design"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="4"
            link="https://www.linkedin.com/learning/programming-foundations-data-structures-2?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name=" Data Structures"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="5"
            link="https://www.linkedin.com/learning/programming-foundations-algorithms?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Algorithms"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="6"
            link="https://www.linkedin.com/learning/programming-foundations-design-patterns-2?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Design Patterns"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="7"
            link="https://www.linkedin.com/learning/programming-foundations-databases-2?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Databases"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="8"
            link="https://www.linkedin.com/learning/programming-foundations-apis-and-web-services?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="APIs and Web Services"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="9"
            link="https://www.linkedin.com/learning/programming-foundations-software-testing-qa?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Software Testing"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="10"
            link="https://www.linkedin.com/learning/learning-github"
            name="Learning GitHub"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />

          {/* html,css */}
          <TrTitle title="Learn HTML and CSS" />
          <TrCourse
            number="11"
            link="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3"
            name="Build Responsive Real-World Websites with HTML and CSS"
            platFrom="Udemy"
            hours="2h 6m"
          />

          {/* js */}
          {open ? (
            <>
              <TrTitle title="Learn JavaScript" />
              <TrCourse
                number="12"
                link="https://www.udemy.com/course/the-complete-javascript-course/"
                name="The Complete JavaScript Course 2022: From Zero to Expert!"
                platFrom="Udemy"
                hours="69h"
              />
              <TrCourse
                number="12"
                link="https://www.udemy.com/course/modern-javascript/"
                name="The Modern JavaScript Bootcamp"
                platFrom="Udemy"
                hours="29h 30m"
              />

              {/* React */}
              <TrTitle title="Learn React Js" />
              <TrCourse
                number="13"
                link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                name="React - The Complete Guide (incl Hooks, React Router, Redux)"
                platFrom="Udemy"
                hours="48h"
              />
              <TrCourse
                number="13"
                link="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
                name=" Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)"
                platFrom="Udemy"
                hours="39h"
              />

              {/* NodeJs */}
              <TrTitle title="Learn Node Js" />
              <TrCourse
                number="14"
                link="https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/"
                name="The Complete Node.js Developer Course (3rd Edition)"
                platFrom="Udemy"
                hours="35h"
              />
              <TrCourse
                number="14"
                link="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
                name="Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)"
                platFrom="Udemy"
                hours="46h"
              />

              {/* AWS  */}
              <TrTitle title="Learn How to Deploy your web applications with Cloud Provider (AWS) Learn React Js" />
              <TrCourse
                number="15"
                link="https://acloud.guru/overview/aws--certified-cloud-practitioner"
                name="AWS Certified Cloud Practitioner (CLF-C01)"
                platFrom="Cloud Guru"
                hours="16h"
              />
              <TrCourse
                number="16"
                link="https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02"
                name="AWS Certified Solutions Architect Associate (SAA-C02)"
                platFrom="Cloud Guru"
                hours="42h"
              />
              <TrTitle title="Learn How to Make serverless web applications" />
              <TrCourse
                number="17"
                link="https://sst.dev/guide.html"
                name="Serverless Stack (SST)"
                platFrom="Serverless Stack"
                hours="10h"
              />
            </>
          ) : (
            ""
          )}

          {/* button to switch  */}
          <tr className="button-row">
            <td colspan="4" className="subject-container-colspan">
              <button onClick={switchMode}>
                {open ? "إخفــاء باقــي المنهــج" : "عــرض باقــي المنهــج"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Subject;
