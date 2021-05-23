import api from "./index";

const useProxy = (url) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

const apis = {
  stats: {
    getConfirmedCases: () =>
      api({
        method: "GET",
        // Use proxy to get around CORS
        url: (() =>
          useProxy(
            "https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json"
          ))(),
      }).then(({ data }) => JSON.parse(data.contents)),
  },
};

export default apis;
