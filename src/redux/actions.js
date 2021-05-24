import {
  REQUEST_CONFIRMED_CASES_LIST,
  CONFIRMED_CASES_LIST_RECEIVED,
  REQUEST_GENERAL_STATS,
  GENERAL_STATS_RECEIVED,
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

export const requestGeneralStats = () => {
  return {
    type: REQUEST_GENERAL_STATS,
  };
};

export const receiveGeneralStats = (generalStats) => {
  return {
    type: GENERAL_STATS_RECEIVED,
    generalStats,
  };
};
