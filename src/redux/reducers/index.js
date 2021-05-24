import { combineReducers } from "redux";
import confirmedCasesList from "./confirmedCases";
import generalStats from "./generalStats";

const rootReducer = combineReducers({ confirmedCasesList, generalStats });

export default rootReducer;
