import transformForecast from './../services/transformForecast'
import transformWeather from './../services/transformWeather'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type:SET_CITY, payload});
const api_key = '256d28302b3db3d4cf49cb3f140209fd';
const url_base_forecast = 'http://api.openweathermap.org/data/2.5/forecast';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const setForcastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
  console.log("pasa");
  //middleware thunk
  return (dispatch, getState) => {
    //getState: estado global
    console.log(payload);
    //accion inicial - activar indicador de busqueda
    dispatch(setCity(payload));

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const now = new Date();

    //si hace menos de 1 minuto, no volver a hacer la peticion
    if(date && (now - date) < 1 * 60 * 1000){
      return;
    }
    
    return fetch(`${url_base_forecast}?q=${payload}&appid=${api_key}`)
    .then(resolve => ( resolve.json()))
    .then(weather_data => {
      //
      const forcastData = transformForecast(weather_data);
      console.log(forcastData);
      //modificar el estado con el resultado de la promesa (fetch)
      dispatch(setForcastData({city: payload, forcastData}));
    });
  }
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));

      const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`

      fetch(api_weather)
      .then(resolve => {return resolve.json()})
      .then(data => {
        const weather = transformWeather(data);
        dispatch(setWeatherCity({city, weather}));

      });
    })
  }


}
