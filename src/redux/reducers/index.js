import { combineReducers } from "redux";

import reservationReducer from "./reservationReducer";

const mainReducer = combineReducers({
  reservationReducer
});

export default mainReducer;