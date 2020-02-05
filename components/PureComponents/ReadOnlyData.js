import React from "react";
import { FaCopy } from "react-icons/fa";

const Details = function(props) {
  const { label, value, ccicon = "false" ,children,className} = props;
  let body;
  if(value && value!==""){
    body=<span className="field-value">{value}</span>;
  }
  else if(children){
    body=children;
  }
  return (
    <div className={className}>
      {label && label !== "" && (
        <label>
          {label}:{"   "}
        </label>
      )}
     {
       body
     }
      {ccicon === "true" && (
        <i className="cc-icon">
          <FaCopy />
        </i>
      )}
    </div>
  );
};
export default Details;
