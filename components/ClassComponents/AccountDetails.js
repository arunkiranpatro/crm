import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../PureComponents/Loading";
import Details from "../PureComponents/ReadOnlyData";
import PhoneList from "../PureComponents/PhoneList";
import Layout from "../UILibrary/Layout";
import { getAccountDetails } from "../../store/actions/accountActions";

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

class AccountDetails extends React.Component {
  componentDidMount() {
    this.props.getAccountDetails();
  }

  render() {
    let { account, isLoading } = this.props.accountCard;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (account) {
      body = (
        <Layout columns="3" className="account-body">
          <div>
            <Details
              label="Account Number"
              value={account.AccountNumber}
              ccicon="true"
            />
            <Details
              label="Primary Email"
              value={account.PrimaryEmail}
              ccicon="true"
            />
            <PhoneList
              ActivePhones={account.ActivePhones}
              togglePhone={togglePhone}
            />
          </div>
          <div>
            <Details label="DOB" value={account.BirthYear} />
            <Details label="SSN" value={account.MaskedSSN} />
            <Details label="TIN" value={account.MaskedTIN} />
          </div>
          <div>
            <Details label="Available Balance" value={account.AvailBalance} />
            <Details
              label="Primary Balance"
              value={account.TotalBalInPrimary}
            />
            <Details
              label="Customer Segment"
              value={account.MerchantCategory}
            />
          </div>
        </Layout>
      );
    } else {
      body = "No results";
    }
    return (
      <fieldset className="account-details-card">
        <legend className="account-header ">Account Details</legend>
        {body}
      </fieldset>
    );
  }
}

AccountDetails.propTypes = {
  accountCard: PropTypes.shape({
    account: PropTypes.any,
    isLoading: PropTypes.bool
  }),
  getAccountDetails: PropTypes.func
};

const mapStateToProps = state => {
  return {
    accountCard: state.accountCard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getAccountDetails })(AccountDetails);
