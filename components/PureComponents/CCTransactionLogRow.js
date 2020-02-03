import React from 'react';

export default function CCTransactionLogRow({txn}) {
  return (
    <div className="data-row">
        <div>{txn.TransAuthDate}</div>
        <div>{txn.FIDetails.IssueNumber}</div>
        <div>{txn.ActionDetails}</div>
        <div >{txn.FIDetails.Currency}</div>
    </div>
  );
}
