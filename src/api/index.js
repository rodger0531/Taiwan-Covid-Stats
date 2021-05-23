import axios from "axios";

const api = (config) => {
  return axios(config).catch((err) => {
    console.log("axios error: ", err);
    throw err;
  });
};

export default api;
