import axios from "axios";

const baseURL = " https://restcountries.eu/rest/v2";

const axiosInstance = axios.create({ baseURL });

export const getCountryByName = (name) => {
  return axios.get(`${baseURL}/name/${name}`, {
    params: {
      fullText: true,
    },
  });
};

export default axiosInstance;
