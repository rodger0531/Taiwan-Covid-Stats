import api from "./index";
import mockData from "../dev/Day_Confirmation_Age_County_Gender_19CoV.json";

const useProxy = (url) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

const apis = {
  stats: {
    getConfirmedCases: () => mockData,
    // api({
    //   method: "GET",
    //   // Use proxy to get around CORS
    //   url: (() =>
    //     useProxy(
    //       "https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json"
    //     ))(),
    // }).then(({ data }) => JSON.parse(data.contents)),
    getGeneralStats: () =>
      api({
        method: "GET",
        url: "https://data.cdc.gov.tw/api/3/action/datastore_search?resource_id=52eb9a7d-813d-48b1-b462-384a7c84a746",
      }),
  },
};

export default apis;
