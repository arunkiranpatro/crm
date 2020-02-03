import React, { Component } from "react";
import axios from "axios";
import Loading from "../PureComponents/Loading";
import { BASEURL, ACCOUNTDETAILS } from "../../constants";
import AccountDetailsPage from "../mockdata/AccountDetailsPage.json";
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

export default class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      errors: ""
    };
  }
  togglePhone(e) {
    let targetVal = e.target.textContent;
    if (targetVal === "Show All") {
      e.target.innerHTML = "Hide All";
    } else {
      e.target.innerHTML = "Show All";
    }
    let ele = document.querySelector("div.phone-values");
    ele.classList.toggle("show-all");
  }
  componentWillMount() {
    this.setState({ loading: true });
    let AccountNumber = "1484801092820019308";
    let fpti = fpti || null;
    if (fpti) {
      AccountNumber = fpti.account_number;
    }
    const url = BASEURL + ACCOUNTDETAILS + "?AccountNumber=" + AccountNumber;
    axios
      .get(url)
      .then(response => {
        this.setState({ results: response.data.Account });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ results: AccountDetailsPage });
        this.setState({ loading: false });
      });
  }

  componentDidUpdate() {
    var eles = document.querySelectorAll(".cc-icon");
    if (eles.length > 0) {
      eles.forEach(ele => addEventListener("click", copyToClipboard, false));
    }
  }

  render() {
    let results = this.state.results.Account;
    let body = "No results found";
    if (this.state.loading) {
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
              <a onClick={this.togglePhone}>Show All</a>
            </div>
          </div>
          <div className="col">
            <Details label="DOB" value={results.BirthYear} />
            <Details label="SSN" value={results.MaskedSSN} />
            <Details label="TIN" value={results.MaskedTIN} />
          </div>
          <div className="col">
            <Details label="Available Balance" value={results.AvailBalance} />
            <Details
              label="Primary Balance"
              value={results.TotalBalInPrimary}
            />
            <Details
              label="Merchant Category"
              value={results.MerchantCategory}
            />
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
  }
}
