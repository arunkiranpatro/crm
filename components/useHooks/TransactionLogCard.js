import React, { useState } from "react";
import TransactionLogRow from "../PureComponents/TransactionLogRow";
import Loading from "../PureComponents/Loading";
import TransactionsJSON from "../../mockdata/transactions.json";

const TransactionLogCard = () => {
  const [txns, setTxns] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setTxns(TransactionsJSON.pxResults);
    setLoading(false);
  }, 3000);

  let body = "No results found";

  if (loading) {
    body = <Loading />;
  } else if (txns.length > 0) {
    body = txns.map((result, index) => {
      return <TransactionLogRow data={result} key={index} />;
    });
  }
  return (
    <div className="transaction-card widget-card">
      <h2 className="transaction-card-header widget-header">
        Transaction Cards
      </h2>
      <div className="transaction-card-body widget-body">{body}</div>
    </div>
  );
};
export default TransactionLogCard;
