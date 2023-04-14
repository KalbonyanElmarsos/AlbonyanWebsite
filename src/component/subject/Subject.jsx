import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TrCourse from "../../tools/trCourse/TrCourse";
import TrTitle from "../../tools/trTitle/TrTitle";
import "./subject.css";

const Subject = () => {
  // const [open, setOpen] = useState(false);

  // const switchMode = () => {
  //   setOpen((prevState) => !prevState);
  // };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="subject" id="subject">
      <h1>منهج المسابقة</h1>
      {/* table */}
      <table className="subject-container">
        <thead data-aos="fade-left">
          <tr>
            <th>م </th>
            <th>الكورس</th>
            <th>المنصة</th>
            <th>عدد الساعات</th>
          </tr>
        </thead>

        <tbody data-aos="fade-up">
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
            hours="2h 4m"
          />

          {/* html,css */}
          <TrTitle title="Learn HTML, CSS and GitHub" />
          <TrCourse
            number="3"
            link="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3"
            name="Build Responsive Real-World Websites with HTML and CSS"
            platFrom="Udemy"
            hours="37h 30m"
          />
          <TrCourse
            number="4"
            link="https://www.udemy.com/course/git-expert-4-hours/"
            name="Git: Become an Expert in Git & GitHub"
            platFrom="Udemy"
            hours="4h"
          />

          {/* js */}
          {/* {open ? (
            <> */}
          <TrTitle title="Learn JavaScript" />
          <TrCourse
            number="5"
            link="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
            name="JavaScript - The Complete Guide 2023 (Beginner + Advanced)"
            platFrom="Udemy"
            hours="52h 32m"
          />
          <TrCourse
            number="6"
            link="https://www.udemy.com/course/web-projects-with-vanilla-javascript/"
            name="20 Web Projects with vanilla JavaScript"
            platFrom="Udemy"
            hours="16h 7m"
          />

          {/* React */}
          <TrTitle title="Learn MERN Stack" />
          <TrCourse
            number="7"
            link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
            name="React - The Complete Guide (incl Hooks, React Router, Redux)"
            platFrom="Udemy"
            hours="49h 25m"
          />

          <TrCourse
            number="8"
            link="https://www.udemy.com/course/nodejs-the-complete-guide/"
            name="NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)"
            platFrom="Udemy"
            hours="40h 31m"
          />

          <TrCourse
            number="9"
            link="https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/"
            name="MERN Stack Course 2022 - MongoDB, Express, React and NodeJS"
            platFrom="Udemy"
            hours="20h 32m"
          />

          {/* AWS  */}
          <TrTitle title="Learn about Cloud Provider and Serverless" />
          <TrCourse
            number="10"
            link="https://learn.acloud.guru/course/aws--certified-cloud-practitioner/overview"
            name="AWS Certified Cloud Practitioner (CLF-C01)"
            platFrom="Cloud Guru"
            hours="16h 12m"
          />
          <TrCourse
            number="11"
            link="https://www.youtube.com/watch?v=AfAZ33XjIBU&feature=youtu.be&ab_channel=CodingAddict"
            name="Serverless Functions with Netlify"
            platFrom="Youtube"
            hours="4h 27m"
          />
          {/* </>
          ) : (
            ""
        )} */}

          {/* button to switch  */}
          {/* <tr className="button-row">
            <td colSpan="4" className="subject-container-colspan">
              <button onClick={switchMode}>
                {open ? "إخفــاء باقــي المنهــج" : "عــرض باقــي المنهــج"}
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
};

export default Subject;
