import React from "react";

function Weather (props) {
    return (
      <div>
      {
        props.city
        &&
        props.country
        &&
      <div className="weather__info">
        <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span> </p>
        <p className="weather__key">Temperature: <span className="weather__value">{props.temperature}</span> </p>
        <p className="weather__key">Humidity: <span className="weather__value"> {props.humidity} </span> </p>
        <p className="weather__key">Conditions: <span className="weather__value"> {props.description} </span> </p>
      </div>
      }
      {
        props.error && <p className="weather__key"> <span className="weather__error"> {props.error} </span> </p>
      }
    </div>
  );
}


export default Weather;
