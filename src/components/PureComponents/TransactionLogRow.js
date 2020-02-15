import React from "react";
import Moment from "react-moment";
import Layout from "../UILibrary/Layout";

export default function TransactionLogRow({ data }) {
  const txnAmtColorCls = data.GrossAmount.Amount > 0 ? "txn-green" : "txn-red";
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.TransactionDate}</Moment>
      <>{data.CounterpartyName}</>
      <>{data.Status}</>
      <div className={txnAmtColorCls}>{data.GrossAmount.AmountCurrency}</div>
    </Layout>
  );
}
