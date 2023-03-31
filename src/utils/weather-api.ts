import axios from 'axios';
import {API_KEY, GEO_CODE_API_BASE_URL, WEATHER_API_BASE_URL} from './config';

export type weatherDataType = {
  name: string;
  main: string;
  feels_like: string;
  humidity: number;
  pressure: number;
  wind_speed: number;
  temp: number;
  icon_url: string;
};

const geoCodeAPI = async (city: string) => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: GEO_CODE_API_BASE_URL,
      url: '/direct',
      params: {
        q: city,
        appid: API_KEY,
        limit: 1,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const weatherAPI = async (lat: number, lon: number) => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: WEATHER_API_BASE_URL,
      url: '/weather',
      params: {
        lat: lat,
        lon: lon,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getWeatherData = (data: any) => {
  return {
    name: data.name,
    main: data.weather[0].main,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind_speed: data.wind.speed,
    temp: data.main.temp,
    icon_url: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
};
export const getWeather = async (city: string) => {
  const geoCodeApiResponse = await geoCodeAPI(city);
  const geoCode = geoCodeApiResponse?.data[0];
  const weatherApiResponse = await weatherAPI(geoCode.lat, geoCode.lon);
  const weatherData: weatherDataType = getWeatherData(weatherApiResponse?.data);
  return weatherData;
};
