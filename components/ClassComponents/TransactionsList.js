import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../UILibrary/Loading";
import Moment from "react-moment";
import Table from "../UILibrary/Table";
import TableColumns from "../UILibrary/TableColumns";
import TableColumn from "../UILibrary/TableColumn";
import TableRows from "../UILibrary/TableRows";
import TableRow from "../UILibrary/TableRow";
import ArraySort from "array-sort";

import { getTxnslist, sortTxns } from "../../store/actions/txnsListActions";

class TransactionsList extends Component {
  componentDidMount() {
    this.props.getTxnslist();
  }
  onSort(column) {
    let { txns, sortBy, sortDirection } = this.props.txnslist;
    if (column === sortBy) {
      const direction = sortDirection === "asc" ? "desc" : "asc";
      const reverse = direction === "desc" ? true : false;
      txns = ArraySort(txns, column, { reverse });
      this.props.sortTxns(txns, column, direction);
    } else {
      txns = ArraySort(txns, column);
      this.props.sortTxns(txns, column, "asc");
    }
  }
  render() {
    let { txns, isLoading } = this.props.txnslist;
    let body = "No results found";

    if (isLoading) {
      body = <Loading />;
    } else if (txns.length > 0) {
      let childBody = txns.map((result, index) => {
        return (
          <TableRows key={index}>
            <TableRow>
              <Moment format="DD-MM-YYYY hh:mm a">
                {result.TransactionDate}
              </Moment>
            </TableRow>
            <TableRow>{result.TransactionID}</TableRow>
            <TableRow>{result.TransactionType}</TableRow>
            <TableRow>{result.CounterpartyEmail}</TableRow>
            <TableRow>{result.NetAmount.AmountCurrency}</TableRow>
            <TableRow>{result.TransLogBalanceCurrency}</TableRow>
          </TableRows>
        );
      });
      body = (
        <Table data={txns}>
          <TableColumns>
            <TableColumn id="TransactionDate" onSort={this.onSort.bind(this)}>
              Transaction Date
            </TableColumn>
            <TableColumn id="TransactionID" onSort={this.onSort.bind(this)}>
              Transaction ID
            </TableColumn>
            <TableColumn id="TransactionType" onSort={this.onSort.bind(this)}>
              Transaction Type
            </TableColumn>
            <TableColumn id="CounterpartyEmail">
              Counter Party Email
            </TableColumn>
            <TableColumn id="NetAmount.Amount" onSort={this.onSort.bind(this)}>
              Net Amount
            </TableColumn>
            <TableColumn
              id="TransLogBalanceCurrency"
              onSort={this.onSort.bind(this)}
            >
              Net Balance
            </TableColumn>
          </TableColumns>
          <tbody>{childBody}</tbody>
        </Table>
      );
    }
    return <>{body}</>;
  }
}
TransactionsList.propTypes = {
  txnslist: PropTypes.shape({
    txns: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getTxnslist: PropTypes.func
};

const mapStateToProps = state => {
  return {
    txnslist: state.txnslist,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getTxnslist, sortTxns })(
  TransactionsList
);
