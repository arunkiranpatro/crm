import { GET_TXNSLIST, SET_TXNLIST_LOADING, SORT_TXNSLIST } from "../constants";
const initialState = {
  isLoading: true,
  txns: [],
  sortBy: "",
  sortDirection: "desc"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TXNLIST_LOADING:
      return { ...state, isLoading: true };
    case GET_TXNSLIST:
      return { ...state, txns: payload, isLoading: false };
    case SORT_TXNSLIST:
      return {
        ...state,
        txns: payload.results,
        isLoading: false,
        sortBy: payload.sortBy,
        sortDirection: payload.sortDirection
      };
    default:
      return state;
  }
};
