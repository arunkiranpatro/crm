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
import Details from "./components/UILibrary/ReadOnlyData";

import "./css/index.scss";

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <AccountDetails />
        <Tabs>
          <TabLinks>
            <TabLink id="0">Dashboard</TabLink>
            <TabLink id="1">Transaction Log</TabLink>
          </TabLinks>
          <Tab id="0" name="Dashboard">
            <Layout columns="4" className="snapshot">
              <Details label="Last Transaction" className="snapshot-card">
                <div>21.00 USD</div>
              </Details>
              <Details label="Opportunity" className="snapshot-card">
                <div>Personal Loan</div>
              </Details>
              <Details label="Potential Call Reason" className="snapshot-card">
                <div>Not able to login</div>
              </Details>
              <Details label="Last Login" className="snapshot-card">
                <div>02-02-2020 11:18 am</div>
              </Details>
            </Layout>
            <Layout columns="2" className="widgets">
              <TransactionLogCard />
              <CCTransactionLogCard />
              <FinancialCard />
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
