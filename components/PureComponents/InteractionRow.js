import React from 'react';
import Layout from '../UILibrary/Layout';

export default function InteractionRow({data}) {
  return (
    <Layout className="widget-row" columns="4">
        <div>{data.CreateDateTime}</div>
        <div>{data.WorkStatus}</div>
        <div>{data.ContactChannel}</div>
        <div >{data.OwnerID}</div>
    </Layout>
  );
}
