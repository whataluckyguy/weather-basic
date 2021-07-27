import React, { useEffect } from "react";
import "./SearchBox.css";
import { Button } from "@material-ui/core";
import { fetch } from "./Components/fetch";
import { fetchForecast } from "./Components/fetchForecast";

function SearchBox({ query, setWeather, setQuery, cast, setCast }) {
  const handleSearch = async () => {
    const data = await fetch(query);
    setWeather(data);
    setQuery("");
  };
  // const fetchForecast = async()=>{
  //   const data = await fetch(fetch)
  // }

  // const handleforecast = async () => {
  //   const forecastdata = await fetch(query);
  //   setCast(forecastdata);
  //   setQuery("");
  // };

  useEffect(() => {
    handleSearch();
    // handleforecast();
  }, []);

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search Your City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="search_button"
        // onClick={handleforecast}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBox;
