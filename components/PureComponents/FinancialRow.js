import React from "react";

export default function FinancialRow({ data }) {
  return (
    <div className="data-row">
      <div>{data.FIName}</div>
      <div>{data.FIType}</div>
      <div>{data.CVFIStatus}</div>
      <div>xxxx-{data.Last4}</div>
    </div>
  );
}
