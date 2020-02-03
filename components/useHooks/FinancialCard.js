import React, { useState } from "react";
import FinancialRow from "../PureComponents/FinancialRow";
import Loading from "../PureComponents/Loading";
import FinancialsJSON from "../../mockdata/financials.json";

const FinancialCard = props => {
  const [fis, setFIs] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setFIs(FinancialsJSON.pxResults);
    setLoading(false);
  }, 500);
  let body = "No results found";
  if (loading) {
    body = <Loading />;
  } else if (fis.length > 0) {
    body = fis.map((result, index) => {
      return <FinancialRow data={result} key={index} />;
    });
  }
  return (
    <div className="financial-card widget-card">
      <h2 className="financial-card-header widget-header">Financials</h2>
      <div className="financial-card-body widget-body">{body}</div>
    </div>
  );
};

export default FinancialCard;
