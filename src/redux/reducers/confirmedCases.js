import {
  REQUEST_CONFIRMED_CASES_LIST,
  CONFIRMED_CASES_LIST_RECEIVED,
} from "../actionTypes";

const initialState = {};

const confirmedCasesList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CONFIRMED_CASES_LIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CONFIRMED_CASES_LIST_RECEIVED: {
      return {
        ...state,
        confirmedCases: action.confirmedCasesList,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default confirmedCasesList;
