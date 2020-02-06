import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import FinancialCard from "./components/ClassComponents/FinancialCard";
import TransactionLogCard from "./components/ClassComponents/TransactionLogCard";
import CCTransactionLogCard from "./components/ClassComponents/CCTransactionLogCard";
import InteractionsCard from "./components/ClassComponents/InteractionsCard";
import Layout from "./components/UILibrary/Layout";
import AccountDetails from "./components/ClassComponents/AccountDetails";
import TransactionsTab from "./components/useHooks/TransactionsTab";
import Tabs from "./components/UILibrary/Tabs";
import Tab from "./components/UILibrary/Tab";
import TabLinks from "./components/UILibrary/TabLinks";
import TabLink from "./components/UILibrary/TabLink";

import "./css/index.scss";

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
};

export default App;
