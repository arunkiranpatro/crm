import React, { Component } from "react";
import FinancialRow from "../PureComponents/FinancialRow";
import Loading from "../PureComponents/Loading";
import { connect } from "react-redux";
import { getFinancials } from "../../store/actions/financialCardActions";

class FinancialCard extends Component {
  componentDidMount() {
    this.props.getFinancials();
  }
  render() {
    let { financials, isLoading, errors } = this.props.financeCard;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (financials.length > 0) {
      body = financials.map((row, index) => {
        return <FinancialRow data={row} key={index} />;
      });
    }
    return (
      <div className="intercation-card widget-card">
        <h2 className="intercation-card-header widget-header">Interactions</h2>
        <div className="intercation-card-body widget-body">{body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    financeCard: state.financeCard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getFinancials })(FinancialCard);
