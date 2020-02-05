import React from "react";
import Layout from "../UILibrary/Layout";

export default function CCTransactionLogRow({ data }) {
  return (
    <Layout className="widget-row" columns="4">
      <>{data.TransAuthDate}</>
      <>{data.FIDetails.IssueNumber}</>
      <>{data.ActionDetails}</>
      <>{data.FIDetails.Currency}</>
    </Layout>
  );
}
