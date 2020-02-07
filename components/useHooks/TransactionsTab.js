import React from "react";
import TxnSearchForm from "./TxnSearchForm";
import TransactionTable from "../ClassComponents/TransactionsList";

const TransactionTab = () => {
  return (
    <>
      <TxnSearchForm />
      <TransactionTable />
    </>
  );
};

export default TransactionTab;
