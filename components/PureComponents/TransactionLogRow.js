import React from "react";
import Layout from "../UILibrary/Layout";

export default function TransactionLogRow({ data }) {
  let txnAmtColorCls = data.GrossAmount.Amount > 0 ? "txn-green" : "txn-red";
  return (
    <Layout className="widget-row" columns="4">
      <>{data.TransactionDate}</>
      <>{data.TransactionType}</>
      <>{data.Status}</>
      <div className={txnAmtColorCls}>{data.GrossAmount.AmountCurrency}</div>
    </Layout>
  );
}
