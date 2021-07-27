import React from "react";
import "./Main.css";

function Main({ weather, cast }) {
  // let weatherIcon = null;

  return (
    <div className="main">
      <h1 className="place">
        {weather.name}, {weather.sys?.country}
      </h1>
      <div className="weather_details">
        <span className="weather_image">
          {/* TODO: */}
          {/* image */}
        </span>
        <span className="temperature">{weather.main?.temp}&deg;C</span>
        <span className="decription">
          {weather.weather ? weather.weather[0]?.description : null}
        </span>
      </div>
      <div className="other_details">
        <div className="upper">
          <span className="feels_like">
            Feels like {weather.main?.feels_like}&deg;C
          </span>
          <span className="wind_speed"> {weather.wind?.speed} m/s</span>
        </div>
        <div className="lower">
          <span className="min_high">
            {weather.main?.temp_min}&deg;C / {weather.main?.temp_max}&deg;C{}
          </span>
          <span className="humidity"> {weather.main?.humidity}% Humidity</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
