import React from "react";
import Layout from "../UILibrary/Layout";
import Moment from "react-moment";

export default function CCTransactionLogRow({ data }) {
  return (
    <Layout className="widget-row" columns="4">
      <Moment format="DD-MM-YYYY hh:mm a">{data.TransAuthDate}</Moment>
      <>{"xxxx-" + data.FIDetails.IssueNumber}</>
      <>{data.ActionDetails}</>
      <>{data.FIDetails.Currency}</>
    </Layout>
  );
}