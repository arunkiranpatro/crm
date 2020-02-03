import React, { useState, useEffect } from "react";
import Loading from "../PureComponents/Loading";
import AccountDetailsJSON from "../../mockdata/AccountDetailsPage.json";
import { FaCopy } from "react-icons/fa";

const Details = function({ label, value, ccicon = "false" }) {
  return (
    <div>
      <label>
        {label}:{"   "}
      </label>
      <span className="field-value">{value}</span>
      {ccicon === "true" && (
        <i className="cc-icon">
          <FaCopy />
        </i>
      )}
    </div>
  );
};

const togglePhone = e => {
  let targetVal = e.target.textContent;
  if (targetVal === "Show All") {
    e.target.innerHTML = "Hide All";
  } else {
    e.target.innerHTML = "Show All";
  }
  let ele = document.querySelector("div.phone-values");
  ele.classList.toggle("show-all");
};

const AccountDetails = () => {
  useEffect(() => {
    var eles = document.querySelectorAll(".cc-icon");
    if (eles.length > 0) {
      eles.forEach(ele => addEventListener("click", copyToClipboard, false));
    }
  });
  const [accountData, setAccountData] = useState({});
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setAccountData(AccountDetailsJSON.Account);
    setLoading(false);
  }, 3000);

  let results = accountData;
  let body = "No results found";
  if (loading) {
    body = <Loading />;
  } else {
    body = (
      <>
        <div className="col">
          <Details
            label="Account Number"
            value={results.AccountNumber}
            ccicon="true"
          />
          <Details
            label="Primary Email"
            value={results.PrimaryEmail}
            ccicon="true"
          />
          <div className="phone-wrapper">
            <div className="phone-label">Phone Number: </div>
            <div className="phone-values">
              {results.ActivePhones.map((phone, index) => {
                let phoneNumber = parseInt(phone.PhoneNumber);
                return <div key={index}>{phoneNumber}</div>;
              })}
            </div>
            <a onClick={togglePhone}>Show All</a>
          </div>
        </div>
        <div className="col">
          <Details label="DOB" value={results.BirthYear} />
          <Details label="SSN" value={results.MaskedSSN} />
          <Details label="TIN" value={results.MaskedTIN} />
        </div>
        <div className="col">
          <Details label="Available Balance" value={results.AvailBalance} />
          <Details label="Primary Balance" value={results.TotalBalInPrimary} />
          <Details label="Merchant Category" value={results.MerchantCategory} />
        </div>
      </>
    );
  }
  return (
    <fieldset className="account-details-card">
      <legend className="account-header ">Account Details</legend>
      <div className="account-body col-3">{body}</div>
    </fieldset>
  );
};

export default AccountDetails;
