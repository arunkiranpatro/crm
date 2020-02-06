import { CLEAR_ERRORS } from "../constants";
import store from "../index";
export default function clearErrors() {
  store.dispatch({ type: CLEAR_ERRORS });
}
