import React, { useState } from "react";
import InteractionRow from "../PureComponents/InteractionRow";
import Loading from "../PureComponents/Loading";
import InteractionsJSON from "../../mockdata/Interactions.json";
const InteractionsCard = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setInteractions(InteractionsJSON.pxResults);
    setLoading(false);
  }, 1000);
  let body = "No results found";
  if (loading) {
    body = <Loading />;
  } else if (interactions.length > 0) {
    body = interactions.map((result, index) => {
      return <InteractionRow data={result} key={index} />;
    });
  }
  return (
    <div className="intercation-card widget-card">
      <h2 className="intercation-card-header widget-header">Interactions</h2>
      <div className="intercation-card-body widget-body">{body}</div>
    </div>
  );
};

export default InteractionsCard;
