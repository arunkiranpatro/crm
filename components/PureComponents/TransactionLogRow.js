import React from 'react';

export default function TransactionLogRow({txn}) {
  let txnAmtColorCls = txn.GrossAmount.Amount>0?"txn-green":"txn-red";
  return (
    <div className="txn-row data-row">
        <div>{txn.TransactionDate}</div>
        <div>{txn.TransactionType}</div>
        <div>{txn.Status}</div>
        <div className={txnAmtColorCls}>{txn.GrossAmount.AmountCurrency}</div>
    </div>
  );
}
