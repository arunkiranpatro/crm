import React, { Component } from "react";
import FinancialRow from "./PureComponents/FinancialRow";
import axios from "axios";
import Loading from "./PureComponents/Loading";
import {BASEURL,FIDETAILS} from "../constants";
import financials from "../mockdata/financials.json";

export default class FinancialCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financials: [],
      loading: false,
      errors:""
    };
  }
  componentWillMount() {
    this.setState({ loading: true });
    let AccountNumber = "1484801092820019308";
    let fpti = fpti || null;
    if (fpti) {
      AccountNumber = fpti.account_number;
    }
    const url = BASEURL + FIDETAILS +"?AccountNumber="+AccountNumber;
    axios.get(url).then(response => {
      this.setState({ financials: response.data.pxResults });
      this.setState({ loading: false });
    }).catch(err => {
      this.setState({ financials: financials.pxResults });
      this.setState({ loading: false });
    });
  }
  render() {
    let fis = this.state.financials;
    let fiBody ="No results found";
    if(fis.length>0){
      fiBody = ( 
          fis.map((fi, index) => {
            return <FinancialRow fi={fi} key={index} />;
          }));
    }else if(this.state.loading){
      fiBody=<Loading/>;
    }
    return (
      <div className="financial-card widget-card">
        <h2 className="financial-card-header widget-header">Financial Cards</h2>
        <div className="financial-card-body widget-body">{fiBody}</div>
      </div>
    );
  }
}
