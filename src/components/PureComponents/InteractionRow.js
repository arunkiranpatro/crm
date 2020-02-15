import React from "react";
import Moment from "react-moment";
import Layout from "../UILibrary/Layout";

export default function InteractionRow({ data }) {
  return (
    <Layout className="widget-row" columns={4}>
      <Moment format="DD-MM-YYYY hh:mm a">{data.CreateDateTime}</Moment>
      <>{data.WorkStatus}</>
      <>{data.ContactChannel}</>
      <>{data.OwnerID}</>
    </Layout>
  );
}
