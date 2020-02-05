import React from "react";
import FinancialCard from "../useHooks/FinancialCard";
import TransactionLogCard from "../useHooks/TransactionLogCard";
import CCTransactionLogCard from "../useHooks/CCTransactionLog";
import InteractionsCard from "../useHooks/InteractionsFC";
import Container from "../UILibrary/Container";

const Widgets = function(props) {
  return (
    <Container className="widgets">
      <Container className="row">
        <Container className="column-6">
          <TransactionLogCard />
        </Container>
        <Container className="column-6">
          <FinancialCard />
        </Container>
      </Container>
      <Container className="row">
        <Container className="column-6">
          <CCTransactionLogCard />
        </Container>
        <Container className="column-6">
          <InteractionsCard />
        </Container>
      </Container>
    </Container>
  );
};

export default Widgets;
