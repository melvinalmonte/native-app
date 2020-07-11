import { combineReducers } from "redux";
import fetchLambda from "./apiReducer";

const rootReducer = combineReducers({ fetchLambda });

export default rootReducer;
