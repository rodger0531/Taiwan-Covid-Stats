import api from "./index";
// import mockData from "../dev/Day_Confirmation_Age_County_Gender_19CoV.json";

const useProxy = (url) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

const apis = {
  stats: {
    getConfirmedCases: () =>
      //  mockData,
      api({
        method: "GET",
        // Use proxy to get around CORS
        url: (() =>
          useProxy(
            "https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json"
          ))(),
      }).then(({ data }) => JSON.parse(data.contents)),
    getGeneralStats: () =>
      // ({
      //   排除: "325,070",
      //   昨日排除: "12,381",
      //   昨日確診: "460",
      //   昨日送驗: "12,959",
      //   死亡: "23",
      //   確診: "4322",
      //   解除隔離: "1133",
      //   送驗: "364,911",
      // }),
      api({
        method: "GET",
        url: "https://data.cdc.gov.tw/api/3/action/datastore_search?resource_id=52eb9a7d-813d-48b1-b462-384a7c84a746",
      }).then(({ data }) => {
        const { _id, ...rest } = data.result.records[0];
        return rest;
      }),
  },
};

export default apis;
