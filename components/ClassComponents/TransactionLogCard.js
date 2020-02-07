import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TransactionLogRow from "../PureComponents/TransactionLogRow";
import Loading from "../UILibrary/Loading";

import { getTransactions } from "../../store/actions/txnCardActions";

class TransactionLogCard extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    let { txns, isLoading } = this.props.txncard;
    let body = "No results found";

    if (isLoading) {
      body = <Loading />;
    } else if (txns.length > 0) {
      body = txns.map((txn, index) => {
        return <TransactionLogRow data={txn} key={index} />;
      });
    }
    return (
      <div className="transaction-card widget-card">
        <h2
          aria-label="transactions"
          className="transaction-card-header widget-header"
        >
          Transactions
        </h2>
        <div className="transaction-card-body widget-body">{body}</div>
      </div>
    );
  }
}
TransactionLogCard.propTypes = {
  txncard: PropTypes.shape({
    txns: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getTransactions: PropTypes.func
};

const mapStateToProps = state => {
  return {
    txncard: state.txncard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getTransactions })(
  TransactionLogCard
);
