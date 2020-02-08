import { GET_TXNSLIST, SET_TXNLIST_LOADING, SORT_TXNSLIST } from "../constants";
import clearErrors from "./errorActions";

import txns from "../../mockdata/TxnsLog.json";

export const getTxnslist = () => dispatch => {
  clearErrors();
  dispatch({
    type: GET_TXNSLIST,
    payload: txns.pxResults
  });
};

export const sortTxns = (results, sortBy, sortDirection) => dispatch => {
  clearErrors();
  dispatch({
    type: SORT_TXNSLIST,
    payload: { results, sortBy, sortDirection }
  });
};
