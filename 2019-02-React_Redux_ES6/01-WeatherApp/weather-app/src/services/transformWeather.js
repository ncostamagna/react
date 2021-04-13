import convert from 'convert-units';

import{
  CLOUDY, SUN, RAIN, SNOW, THUNDER, DRIZZLE //se puede dejar una coma en el ultimo elemento por si alguien quiere agregar mas cosas
} from './../constants/weather';


const getWeatherState = weather => {
  const {id} = weather;

  if(id < 300){
    return THUNDER;
  }else if(id < 400){
    return DRIZZLE;
  }else if(id < 600){
    return RAIN;
  }else if(id < 700){
    return SNOW;
  }else if(id === 800){
    return SUN;
  }else{
    return CLOUDY;
  }
}

const getTemp = kelvin => {
  //recibe kelvin - k
  //devuelve grados - c
  //toFixed de 2 decimales
  return Number(convert(kelvin).from('K').to("C").toFixed(2))
}

const transformWeather = weather_data => {
  const {humidity, temp} = weather_data.main;
  const {speed} = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = getTemp(temp);

  return {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  }
}

export default transformWeather;
