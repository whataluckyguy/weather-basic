import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
// const URLF = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "7f750ab3542058adcb88ffb227dcb6f4";

export const fetch = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  // const { data } = await axios.get(URLF, {
  //   params: {
  //     q: query,
  //     units: "metric",
  //     APPID: API_KEY,
  //   },
  // });

  return data;
};
