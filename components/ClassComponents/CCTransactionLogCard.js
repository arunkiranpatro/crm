import React, { Component } from "react";
import CCTransactionLogRow from "../PureComponents/CCTransactionLogRow";
import Loading from "../PureComponents/Loading";
import { connect } from "react-redux";
import { getCCTransactions } from "../../store/actions/ccTxnCardActions";

class CCTransactionLogCard extends Component {
  componentDidMount() {
    this.props.getCCTransactions();
  }
  render() {
    let { txns, isLoading, errors } = this.props.cctxnsCard;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (txns.length > 0) {
      body = txns.map((txn, index) => {
        return <CCTransactionLogRow data={txn} key={index} />;
      });
    }
    return (
      <div className="cc-transaction-card widget-card">
        <h2 className="cc-transaction-card-header widget-header">
          CC Transactions
        </h2>
        <div className="cc-transaction-card-body widget-body">{body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cctxnsCard: state.cctxnsCard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getCCTransactions })(
  CCTransactionLogCard
);
