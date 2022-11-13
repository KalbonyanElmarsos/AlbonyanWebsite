import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./trTitle.css";

const TrTitle = ({ title }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <tr>
      <td colSpan="4" className="subject-container-colspan">
        {title}
      </td>
    </tr>
  );
};

export default TrTitle;
