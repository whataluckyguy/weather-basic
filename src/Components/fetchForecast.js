import axios from "axios";
const URLF = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "7f750ab3542058adcb88ffb227dcb6f4";

export const fetchForecast = async (query) => {
  const { forecastdata } = await axios.get(URLF, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return forecastdata;
};
