import React from "react";

export default function CCTransactionLogRow({ data }) {
  return (
    <div className="data-row">
      <div>{data.TransAuthDate}</div>
      <div>{data.FIDetails.IssueNumber}</div>
      <div>{data.ActionDetails}</div>
      <div>{data.FIDetails.Currency}</div>
    </div>
  );
}
