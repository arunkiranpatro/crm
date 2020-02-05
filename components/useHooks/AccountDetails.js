import React, { useState, useEffect } from "react";
import Loading from "../PureComponents/Loading";
import AccountDetailsJSON from "../../mockdata/AccountDetailsPage.json";
import Details from "../PureComponents/ReadOnlyData";
import PhoneList from "../PureComponents/PhoneList";
import Layout from "../UILibrary/Layout";

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
      eles.forEach(ele =>
        ele.addEventListener("click", copyToClipboard, false)
      );
    }
  }, []);
  const [accountData, setAccountData] = useState({});
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setAccountData(AccountDetailsJSON.Account);
    setLoading(false);
  }, 500);

  let results = accountData;
  let body = "No results found";
  if (loading) {
    body = <Loading />;
  } else {
    body = (
      <Layout columns="3" className="account-body">
        <div>
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
          <PhoneList ActivePhones={results.ActivePhones} togglePhone={togglePhone}/>
        </div>
        <div >
          <Details label="DOB" value={results.BirthYear} />
          <Details label="SSN" value={results.MaskedSSN} />
          <Details label="TIN" value={results.MaskedTIN} />
        </div>
        <div >
          <Details label="Available Balance" value={results.AvailBalance} />
          <Details label="Primary Balance" value={results.TotalBalInPrimary} />
          <Details label="Customer Segment" value={results.MerchantCategory} />
        </div>
      </Layout>
    );
  }
  return (
    <fieldset className="account-details-card">
      <legend className="account-header ">Account Details</legend>
      {body}
    </fieldset>
  );
};

export default AccountDetails;
