import React from "react";
import TxnSearchForm from "./TxnSearchForm";
import TransactionTable from "./TransactionTable";

const TransactionTab = () => {
  return (
    <>
      <TxnSearchForm />
      <TransactionTable />
    </>
  );
};

export default TransactionTab;
