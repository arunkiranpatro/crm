import React from 'react';

export default function FinancialRow(props) {
  return (
    <div className="data-row">
        <div>{props.fi.FIName}</div>
        <div>{props.fi.FIType}</div>
        <div>{props.fi.CVFIStatus}</div>
        <div>xxxx-{props.fi.Last4}</div>
        
    </div>
  );
}
