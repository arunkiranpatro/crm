import React from "react";
import Details from "../UILibrary/ReadOnlyData";

const PhoneList = function(props) {
  let { ActivePhones, togglePhone } = props;
  return (
    <Details label="Phone Number:" ccicon="false" className="phone-wrapper">
      <div className="phone-values">
        {ActivePhones.map((phone, index) => {
          return (
            <Details key={index} value={phone.PhoneNumber} ccicon="true" />
          );
        })}
      </div>
      <a onClick={togglePhone} className="phone-show-all">
        Show All
      </a>
    </Details>
  );
};

export default PhoneList;
