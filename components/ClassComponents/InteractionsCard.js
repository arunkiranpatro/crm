import React, { Component } from "react";
import InteractionRow from "../PureComponents/InteractionRow";
import axios from "axios";
import Loading from "../PureComponents/Loading";
import { BASEURL, INTERACTIONS } from "../../constants";
import interactions from "../mockdata/Interactions.json";

export default class InteractionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      errors: ""
    };
  }
  componentWillMount() {
    this.setState({ loading: true });
    let AccountNumber = "1484801092820019308";
    let fpti = fpti || null;
    if (fpti) {
      AccountNumber = fpti.account_number;
    }
    const url = BASEURL + INTERACTIONS + "?AccountNumber=" + AccountNumber;
    axios
      .get(url)
      .then(response => {
        this.setState({ results: response.data.pxResults });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ results: interactions.pxResults });
        this.setState({ loading: false });
      });
  }
  render() {
    let results = this.state.results;
    let body = "No results found";
    if (results.length > 0) {
      body = results.map((result, index) => {
        return <InteractionRow data={result} key={index} />;
      });
    } else if (this.state.errors !== "") {
      body = <div>{this.state.errors}</div>;
    } else if (this.state.loading) {
      body = <Loading />;
    }
    return (
      <div className="intercation-card widget-card">
        <h2 className="intercation-card-header widget-header">Interactions</h2>
        <div className="intercation-card-body widget-body">{body}</div>
      </div>
    );
  }
}
