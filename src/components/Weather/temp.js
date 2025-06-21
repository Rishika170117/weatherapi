import Weathercard from "./weathercard";
import './style.css';
import { useEffect, useState } from "react";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f57716b78badaebb9f8219e6663d0964`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherByCoordinates = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f57716b78badaebb9f8219e6663d0964`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };

      setTempInfo(myNewWeatherInfo);
      setSearchValue(name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCoordinates(lat, lon);
      }, () => {
        getWeatherInfo("Pune");
      });
    } else {
      getWeatherInfo("Pune");
    }
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={() => getWeatherInfo(searchValue)}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
