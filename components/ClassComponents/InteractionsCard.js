import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InteractionRow from "../PureComponents/InteractionRow";
import Loading from "../PureComponents/Loading";
import { getInteractions } from "../../store/actions/interactionsActions";

class InteractionsCard extends Component {
  componentDidMount() {
    this.props.getInteractions();
  }

  render() {
    let { interactions, isLoading } = this.props.icasesCard;
    let body = "No results found";
    if (isLoading) {
      body = <Loading />;
    } else if (interactions.length > 0) {
      body = interactions.map((row, index) => {
        return <InteractionRow data={row} key={index} />;
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

InteractionsCard.propTypes = {
  icasesCard: PropTypes.shape({
    interactions: PropTypes.array,
    isLoading: PropTypes.bool
  }),
  getInteractions: PropTypes.func
};

const mapStateToProps = state => {
  return {
    icasesCard: state.icasesCard,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { getInteractions })(InteractionsCard);
