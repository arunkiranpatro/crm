import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Tabs from "./components/UILibrary/Tabs";
import Tab from "./components/UILibrary/Tab";
import TabLinks from "./components/UILibrary/TabLinks";
import TabLink from "./components/UILibrary/TabLink";
import ErrorBoundary from "./components/ClassComponents/ErrorBoundary";
import AccountDetails from "./components/ClassComponents/AccountDetails";
import TransactionsTab from "./components/PureComponents/TransactionsTab";
import DashboardTab from "./components/PureComponents/DashboardTab";

import "./css/index.scss";

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <ErrorBoundary>
          <AccountDetails />
          <Tabs>
            <TabLinks>
              <TabLink id="0">Dashboard</TabLink>
              <TabLink id="1">Transaction Log</TabLink>
            </TabLinks>
            <Tab id="0" name="Dashboard">
              <DashboardTab />
            </Tab>
            <Tab id="1" name="Transactions Log">
              <TransactionsTab />
            </Tab>
          </Tabs>
        </ErrorBoundary>
      </Provider>
    </div>
  );
};

export default App;
