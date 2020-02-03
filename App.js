import React from "react";
import FinancialCard from "./components/useHooks/FinancialCard";
import TransactionLogCard from "./components/useHooks/TransactionLogCard";
import CCTransactionLogCard from "./components/useHooks/CCTransactionLog";
import InteractionsCard from "./components/useHooks/InteractionsFC";
import AccountDetails from "./components/useHooks/AccountDetails";
import "./css/index.scss";

const App = () => {
  return (
    <div className="container">
      <AccountDetails />
      <div className="widgets">
        <FinancialCard />
        <TransactionLogCard />
        <CCTransactionLogCard />
        <InteractionsCard />
      </div>
    </div>
  );
};

export default App;
