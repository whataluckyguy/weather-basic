import React, { useState } from "react";
import "./App.css";

import SearchBox from "./SearchBox";
import Main from "./Main";
import Extra from "./Extra";

const App = () => {
  const [query, setQuery] = useState("delhi");
  const [weather, setWeather] = useState({});
  const [cast, setCast] = useState({});
  // const search = async () => {
  //   const data = await fetch(query);
  //   setWeather(data);
  //   setQuery("");
  // };

  // const searchBySubmit = async (e) => {
  //   if (e.key === "Enter") {
  //     const data = await fetch(query);
  //     setWeather(data);
  //     setQuery("");
  //   }
  // };

  // useEffect(() => {
  //   search();
  // }, []);

  return (
    <div className="app">
      {/* SearchBox */}
      <SearchBox query={query} setQuery={setQuery} setWeather={setWeather} />

      {/* Main Data  */}
      <Main weather={weather} />
      {/* Extra Data */}
      <Extra />
    </div>
  );
};

export default App;
