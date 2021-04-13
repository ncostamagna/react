import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';
import{
  CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE //se puede dejar una coma en el ultimo elemento por si alguien quiere agregar mas cosas
} from './../../../constants/weather'
import './styles.css';

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
}

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if(icon == null)
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}></WeatherIcons>
  else
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
}

const WeatherTemperature = ({temperature,weatherState}) => (
  <div className="weatherTemperature">
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} C°`}</span>
  </div>
);

//validacion de tipo de dato y si es requerido
WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
