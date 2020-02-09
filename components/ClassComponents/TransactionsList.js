import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../UILibrary/Loading";
import Moment from "react-moment";
import Table from "../UILibrary/Table";
import TableColumn from "../UILibrary/TableColumn";
import TableRows from "../UILibrary/TableRows";
import TableRow from "../UILibrary/TableRow";


import { getTxnslist, sortTxns } from "../../store/actions/txnsListActions";
import TableColumns from "../UILibrary/TableColumns";

class TransactionsList extends Component {
  componentDidMount() {
    this.props.getTxnslist();
  }
  renderTablebody(txns){
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
    return childBody;
  }
  renderTableHeader(props){
    return(<TableColumns {...props}>
      <TableColumn id="TransactionDate" sortable={true}>
    Transaction Date
  </TableColumn>
  <TableColumn id="TransactionID" sortable={true}>
    Transaction ID
  </TableColumn>
  <TableColumn id="TransactionType"sortable={true}>
    Transaction Type
  </TableColumn>
  <TableColumn id="CounterpartyEmail">
    Counter Party Email
  </TableColumn>
  <TableColumn id="NetAmount.Amount" sortable={true}>
    Net Amount
  </TableColumn>
  <TableColumn id="TransLogBalanceCurrency">
    Net Balance
  </TableColumn>
  </TableColumns>
      
   );
   
  }
  render() {
    let { txns, isLoading } = this.props.txnslist;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (txns.length > 0) {
      body = (
        <Table data={txns} renderTableHeader={this.renderTableHeader.bind(this)}
         renderTableBody={this.renderTablebody.bind(this) } 
         sortColumn="TransactionDate" sortDirection="desc"/>
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

export default connect(mapStateToProps, { getTxnslist })(
  TransactionsList
);
