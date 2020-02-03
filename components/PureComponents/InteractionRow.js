import React from 'react';

export default function InteractionRow({data}) {
  return (
    <div className="data-row">
        <div>{data.CreateDateTime}</div>
        <div>{data.WorkStatus}</div>
        <div>{data.ContactChannel}</div>
        <div >{data.OwnerID}</div>
    </div>
  );
}
