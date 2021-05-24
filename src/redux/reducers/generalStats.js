import { REQUEST_GENERAL_STATS, GENERAL_STATS_RECEIVED } from "../actionTypes";

const initialState = {};

const generalStats = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GENERAL_STATS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GENERAL_STATS_RECEIVED: {
      return {
        ...state,
        generalStats: action.generalStats,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default generalStats;
