import { combineReducers } from "redux";
import fetchLambda from "./apiReducer";
import fetchFast from "./fastReducer";

const rootReducer = combineReducers({ fetchLambda, fetchFast });

export default rootReducer;
