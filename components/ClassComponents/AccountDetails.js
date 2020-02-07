import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../UILibrary/Loading";
import Details from "../UILibrary/ReadOnlyData";
import PhoneList from "../PureComponents/PhoneList";
import Layout from "../UILibrary/Layout";
import { getAccountDetails } from "../../store/actions/accountActions";
import { FaCheck } from "react-icons/fa";

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

function copyToClipboard(e) {
  var myEle = e.target.parentElement.parentElement;
  var parent = myEle.parentElement;
  var textEle = parent.getElementsByClassName("field-value");
  var textToCopy = textEle[0].textContent;
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = textToCopy;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
}

class AccountDetails extends React.Component {
  componentDidMount() {
    this.props.getAccountDetails();
  }

  componentDidUpdate() {
    var eles = document.querySelectorAll(".cc-icon");
    if (eles.length > 0) {
      eles.forEach(ele =>
        ele.addEventListener("click", copyToClipboard, false)
      );
    }
  }

  render() {
    let { account, isLoading } = this.props.accountCard;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (account) {
      body = (
        <Layout columns="3" className="interaction-header">
          <div>
            <h2 aria-label="customer name" className="customer-name">
              {account.AccountName}
            </h2>
            <Details
              label="Account Number: "
              value={account.AccountNumber}
              ccicon="true"
            />
            <Details label="Primary Email: " ccicon="true">
              {account.PrimaryEmail}
            </Details>
            <PhoneList
              ActivePhones={account.ActivePhones}
              togglePhone={togglePhone}
            />
          </div>
          <div>
            <h2 aria-label="account balance snapshot">
              Account Balance Snapshot
            </h2>
            <Details label="Available Balance: " value={account.AvailBalance} />
            <Details
              label="Primary Balance:"
              value={account.TotalBalInPrimary}
            />
            <Details label="Customer Lifetime Value: " value="$ 4000 USD" />
          </div>
          <div>
            <h2 aria-label="interaction details">Interaction Details</h2>
            <Details label="Step Up: " className="validation-status">
              Verfied <FaCheck />
            </Details>
            <Details label="Last Interaction: " value="2 days ago" />
            <Details
              label="Customer Segment: "
              value={account.MerchantCategory}
            />
          </div>
        </Layout>
      );
    } else {
      body = "No results";
    }
    return <>{body}</>;
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
