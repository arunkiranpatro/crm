import React from "react";
import { FaCopy } from "react-icons/fa";

const Details = function({ label, value, ccicon = "false" }) {
  return (
    <div>
      {label && label !== "" && (
        <label>
          {label}:{"   "}
        </label>
      )}
      <span className="field-value">{value}</span>
      {ccicon === "true" && (
        <i className="cc-icon">
          <FaCopy />
        </i>
      )}
    </div>
  );
};
export default Details;
