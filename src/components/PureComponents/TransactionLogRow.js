import React from "react";
import Layout from "../UILibrary/Layout";
import Moment from "react-moment";

export default function TransactionLogRow({ data }) {
  let txnAmtColorCls = data.GrossAmount.Amount > 0 ? "txn-green" : "txn-red";
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.TransactionDate}</Moment>
      <>{data.CounterpartyName}</>
      <>{data.Status}</>
      <div className={txnAmtColorCls}>{data.GrossAmount.AmountCurrency}</div>
    </Layout>
  );
}
