import React from "react";
import Layout from "../UILibrary/Layout";
import Moment from "react-moment";

export default function InteractionRow({ data }) {
  return (
    <Layout className="widget-row" columns="4">
      <Moment format="DD-MM-YYYY hh:mm a">{data.CreateDateTime}</Moment>
      <>{data.WorkStatus}</>
      <>{data.ContactChannel}</>
      <>{data.OwnerID}</>
    </Layout>
  );
}
