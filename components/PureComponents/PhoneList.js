import React from 'react';
import Layout from '../UILibrary/Layout';
import Details from "./ReadOnlyData";


const PhoneList = function(props){
    let {ActivePhones,togglePhone} = props;
    return(
        <Details label="Phone Number" ccicon="false" className="phone-wrapper">
             <div className="phone-values">
              {ActivePhones.map((phone, index) => {
                let phoneNumber = parseInt(phone.PhoneNumber);
                return (
                  <Details key={index} value={phoneNumber} ccicon="true" />
                );
              })}
            </div>
            <a onClick={togglePhone}>Show All</a>
        </Details>
    )

}

export default PhoneList;