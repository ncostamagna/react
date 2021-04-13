import { combineReducers} from 'redux'
import { createSelector } from 'reselect'
import { cities, getForcastDataFromCities as _getForcastDataFromCities, getWeatherCities as _getWeatherCities} from './cities';
import { city } from './city';

export default combineReducers({
  cities,
  city
});

// createSelector(...input | [input], resultadoFuncion)
export const getCity = createSelector(state => state.city, city => city);
export const getForcastDataFromCities = createSelector(state => state.cities, getCity, _getForcastDataFromCities);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
