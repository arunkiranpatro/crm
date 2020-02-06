import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FinancialRow from "../PureComponents/FinancialRow";
import Loading from "../PureComponents/Loading";
import { getFinancials } from "../../store/actions/financialCardActions";

class FinancialCard extends Component {
  componentDidMount() {
    this.props.getFinancials();
  }

  render() {
    let { financials, isLoading } = this.props.financeCard;
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
FinancialCard.propTypes = {
  financeCard: PropTypes.shape({
    financials: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getFinancials: PropTypes.func
};

const mapStateToProps = state => {
  return {
    financeCard: state.financeCard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getFinancials })(FinancialCard);
