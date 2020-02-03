import React from "react";

export default function TransactionLogRow({ data }) {
  let txnAmtColorCls = data.GrossAmount.Amount > 0 ? "txn-green" : "txn-red";
  return (
    <div className="txn-row data-row">
      <div>{data.TransactionDate}</div>
      <div>{data.TransactionType}</div>
      <div>{data.Status}</div>
      <div className={txnAmtColorCls}>{data.GrossAmount.AmountCurrency}</div>
    </div>
  );
}
