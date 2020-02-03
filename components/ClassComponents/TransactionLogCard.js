import React, { Component } from "react";
import TransactionLogRow from "../PureComponents/TransactionLogRow";
import axios from "axios";
import Loading from "../PureComponents/Loading";
import { BASEURL, TRANSACTIONS } from "../../constants";
import transactions from "../mockdata/transactions.json";

export default class TransactionLogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txns: [],
      loading: false,
      errors: ""
    };
  }
  componentWillMount() {
    this.setState({ loading: true });
    let AccountNumber = "1484801092820019308";
    let fpti = fpti || null;
    if (fpti) {
      AccountNumber = fpti.account_number;
    }
    const url = BASEURL + TRANSACTIONS + "?AccountNumber=" + AccountNumber;
    axios
      .get(url)
      .then(response => {
        this.setState({ txns: response.data.pxResults });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ txns: transactions.pxResults });
        this.setState({ loading: false });
      });
  }
  render() {
    let txns = this.state.txns;
    let txnBody = "No results found";
    if (txns.length > 0) {
      txnBody = txns.map((txn, index) => {
        return <TransactionLogRow data={txn} key={index} />;
      });
    } else if (this.state.errors !== "") {
      txnBody = <div>{this.state.errors}</div>;
    } else if (this.state.loading) {
      txnBody = <Loading />;
    }
    return (
      <div className="transaction-card widget-card">
        <h2 className="transaction-card-header widget-header">
          Transaction Cards
        </h2>
        <div className="transaction-card-body widget-body">{txnBody}</div>
      </div>
    );
  }
}
