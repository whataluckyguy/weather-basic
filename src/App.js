import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";

// COMPONENTS

import Navigation from "./Components/Navigation";
import { fetch } from "./Components/fetch";

const App = () => {
  const [query, setQuery] = useState("delhi");
  const [weather, setWeather] = useState({});

  const search = async () => {
    const data = await fetch(query);
    setWeather(data);
    setQuery("");
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <Navigation />
      <div className="searchbox">
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Your City"
        />
        <button type="button" onClick={() => search()}>
          Search
        </button>
      </div>

      <div className="weathercard">
        <Card>
          <CardBody className="">
            <CardTitle>
              {/* City and country name */}
              <p className="h1 text-center">
                🗺{weather.name}, {weather.sys?.country}
              </p>
            </CardTitle>
            <CardText>
              <p className="text-capitalize text-secondary text-center h3">
                {weather.weather ? weather.weather[0]?.description : null}
              </p>

              <span className="h2 temp ">
                🌡 {weather.main?.temp}
                &deg;C
              </span>
              <img
                height="150"
                width="150"
                alt="imgicon"
                src={`http://openweathermap.org/img/w/${
                  weather.weather ? weather.weather[0].icon : null
                }.png`}
              />
              <br />

              <span className=" text-secondary feel">
                🌡Feels like {weather.main?.feels_like}&deg;C
              </span>
              <br />

              <span className="text-secondary mr-4">
                🌬{weather.wind?.speed} m/s
              </span>
              <span className=""></span>
              <span className="text-secondary">
                💧{weather.main?.humidity}% Humidity
              </span>
              <span></span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default App;
