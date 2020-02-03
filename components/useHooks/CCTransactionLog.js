import React, { useState } from "react";
import CCTransactionsLogRow from "../PureComponents/CCTransactionLogRow";
import Loading from "../PureComponents/Loading";
import CCTransactionsJSON from "../../mockdata/CCtransactions.json";

const CCTransactionLogCard = () => {
  const [txns, setTxns] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setTxns(CCTransactionsJSON.pxResults);
    setLoading(false);
  }, 500);

  let body = "No results found";

  if (loading) {
    body = <Loading />;
  } else if (txns.length > 0) {
    body = txns.map((result, index) => {
      return <CCTransactionsLogRow data={result} key={index} />;
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
};
export default CCTransactionLogCard;
