import React, { Component } from "react";
import TransactionLogRow from "../PureComponents/TransactionLogRow";
import Loading from "../PureComponents/Loading";
import { connect } from "react-redux";
import { getTransactions } from "../../store/actions/txnCardActions";

class TransactionLogCard extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    let { txns, isLoading } = this.props.txncard;
    console.log("is loading:" + isLoading);
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
        <h2 className="transaction-card-header widget-header">Transactions</h2>
        <div className="transaction-card-body widget-body">{body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    txncard: state.txncard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getTransactions })(
  TransactionLogCard
);
