import React, { Component } from "react";
import CCTransactionLogRow from "../PureComponents/CCTransactionLogRow";
import axios from "axios";
import Loading from "../PureComponents/Loading";
import { BASEURL, CCTRANSACTIONS } from "../../constants";
import CCTransactions from "../mockdata/CCtransactions.json";

export default class CCTransactionLogCard extends Component {
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
    const url = BASEURL + CCTRANSACTIONS + "?AccountNumber=" + AccountNumber;
    axios
      .get(url)
      .then(response => {
        this.setState({ txns: response.data.pxResults });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ txns: CCTransactions.pxResults });
        this.setState({ loading: false });
      });
  }
  render() {
    let txns = this.state.txns;
    let txnBody = "No results found";
    if (txns.length > 0) {
      txnBody = txns.map((txn, index) => {
        return <CCTransactionLogRow data={txn} key={index} />;
      });
    } else if (this.state.loading) {
      txnBody = <Loading />;
    }
    return (
      <div className="cc-transaction-card widget-card">
        <h2 className="cc-transaction-card-header widget-header">
          CC Transactions
        </h2>
        <div className="transaction-card-body widget-body">{txnBody}</div>
      </div>
    );
  }
}
