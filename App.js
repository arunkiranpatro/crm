import React, { createContext } from "react";
import FinancialCard from "./components/useHooks/FinancialCard";
import TransactionLogCard from "./components/useHooks/TransactionLogCard";
import CCTransactionLogCard from "./components/useHooks/CCTransactionLog";
import InteractionsCard from "./components/useHooks/InteractionsFC";
import Layout from "./components/UILibrary/Layout";
import AccountDetails from "./components/useHooks/AccountDetails";
import TransactionsTab from "./components/useHooks/TransactionsTab";
import Tabs from "./components/UILibrary/Tabs";
import Tab from "./components/UILibrary/Tab";
import TabLinks from "./components/UILibrary/TabLinks";
import TabLink from "./components/UILibrary/TabLink";

import CCTransactionsJSON from "./mockdata/CCtransactions.json";
import InteractionJSON from "./mockdata/Interactions.json";
import TransactionsJSON from "./mockdata/transactions.json";
import FinancialsJSON from "./mockdata/financials.json";

import "./css/index.scss";

const App = () => {
  return (
    <div className="container">
      <Tabs>
        <TabLinks>
          <TabLink id="0">Dashboard</TabLink>
          <TabLink id="1">Transaction Log</TabLink>
        </TabLinks>
        <Tab id="0" name="Dashboard">
          <AccountDetails />
          <Layout columns="2" className="widgets">
            <FinancialCard />
            <TransactionLogCard />
            <CCTransactionLogCard />
            <InteractionsCard />
          </Layout>
        </Tab>
        <Tab id="1" name="Transaction Log">
          <TransactionsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
