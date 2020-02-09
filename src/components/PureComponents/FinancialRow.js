import React from "react";
import Layout from "../UILibrary/Layout";

export default function FinancialRow({ data }) {
  return (
    <Layout className="widget-row" columns="4">
      <>{data.FIName}</>
      <>{data.FIType}</>
      <>{data.CVFIStatus}</>
      <>xxxx-{data.Last4}</>
    </Layout>
  );
}
