import React from 'react'

const Weathercard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    country,
    sunset,
    speed
  } = tempInfo;

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleDateString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p><i className="wi wi-sunset"></i></p>
              <p className="extra-info-leftside">
                {sunset ? getTime(sunset) : "--"} <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className="wi wi-humidity"></i></p>
              <p className="extra-info-leftside">
                {humidity} <br /> Humidity
              </p>
            </div>
          </div>

          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p><i className="wi wi-barometer"></i></p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className="wi wi-strong-wind"></i></p>
              <p className="extra-info-leftside">
                {speed} km/h <br /> Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard;
