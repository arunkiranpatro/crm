import React, { useState } from "react";
import Table from "../UILibrary/Table";
import TableColumns from "../UILibrary/TableColumns";
import TableColumn from "../UILibrary/TableColumn";
import TableRows from "../UILibrary/TableRows";
import TableRow from "../UILibrary/TableRow";
import TxnsLogs from "../../mockdata/TxnsLog.json";
import Loading from "../UILibrary/Loading";

const TransactionTable = () => {
  const [txns, setTxns] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setTxns(TxnsLogs.pxResults);
    setLoading(false);
  }, 1000);

  let body = "No results found";

  if (loading) {
    body = <Loading />;
  } else if (txns.length > 0) {
    let childBody = txns.map((result, index) => {
      return (
        <TableRows key={index}>
          <TableRow>{result.TransactionID}</TableRow>
          <TableRow>{result.TransactionDate}</TableRow>
          <TableRow>{result.TransactionType}</TableRow>
          <TableRow>{result.CounterpartyEmail}</TableRow>
          <TableRow>{result.NetAmount.AmountCurrency}</TableRow>
          <TableRow>{result.TransLogBalanceCurrency}</TableRow>
        </TableRows>
      );
    });
    body = (
      <Table>
        <TableColumns>
          <TableColumn>Transaction ID</TableColumn>
          <TableColumn>Transaction Date</TableColumn>
          <TableColumn>Transaction Type</TableColumn>
          <TableColumn>Counter Party Email</TableColumn>
          <TableColumn>Net Amount</TableColumn>
          <TableColumn>Net Balance</TableColumn>
        </TableColumns>
        <tbody>{childBody}</tbody>
      </Table>
    );
  }
  return <>{body}</>;
};
export default TransactionTable;
