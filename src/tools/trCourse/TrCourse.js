import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./trCourse.css";

const TrCourse = ({ number, link, name, platFrom, hours }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <tr className="trCourse" data-aos="fade-left">
      <td>{number}</td>
      <td>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </td>
      <td>{platFrom}</td>
      <td>{hours} </td>
    </tr>
  );
};

export default TrCourse;
