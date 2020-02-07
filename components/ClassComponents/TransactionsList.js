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

import { getTxnslist } from "../../store/actions/txnsListActions";

class TransactionsList extends Component {
  componentDidMount() {
    this.props.getTxnslist();
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
            <TableRow>{result.TransactionID}</TableRow>
            <TableRow>
              <Moment format="DD-MM-YYYY hh:mm a">
                {result.TransactionDate}
              </Moment>
            </TableRow>
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

export default connect(mapStateToProps, { getTxnslist })(TransactionsList);
