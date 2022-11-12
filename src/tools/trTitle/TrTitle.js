import React from "react";
import "./trTitle.css";

const TrTitle = ({ title }) => {
  return (
    <tr>
      <td colspan="4" className="subject-container-colspan">
        {title}
      </td>
    </tr>
  );
};

export default TrTitle;
