import {
  REQUEST_CONFIRMED_CASES_LIST,
  CONFIRMED_CASES_LIST_RECEIVED,
} from "./actionTypes";

export const requestConfirmedCasesList = () => {
  return {
    type: REQUEST_CONFIRMED_CASES_LIST,
  };
};

export const receiveConfirmedCasesList = (confirmedCasesList) => {
  return {
    type: CONFIRMED_CASES_LIST_RECEIVED,
    confirmedCasesList,
  };
};
