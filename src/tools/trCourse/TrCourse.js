import React from "react";
import "./trCourse.css";

const TrCourse = ({ number, link, name, platFrom, hours }) => {
  return (
    <tr className="trCourse">
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
