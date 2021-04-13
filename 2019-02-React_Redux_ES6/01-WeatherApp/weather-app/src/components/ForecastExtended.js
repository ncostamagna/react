import React from 'react'
import WeatherLocation from './WeatherLocation'
import {PropTypes} from 'prop-types'
import ForcastItem from './ForcastItem'
import transformForecast from '../services/transformForecast'

const renderForescastItemDays = forcastData => {
  return forcastData.map(forcast => <ForcastItem
                          key={`${forcast.weekDay}${forcast.hour}`}
                          weekDay={forcast.weekDay}
                          hour={forcast.hour}
                          data={forcast.data} />)
}

const renderProgress = () =>{
  return "cargando pronostico"
}


const ForecastExtended = ({city, forcastData}) => (
        <div>
          <h2>{city}</h2>
          {forcastData ? renderForescastItemDays(forcastData) : renderProgress()}
        </div>
      );

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forcastData: PropTypes.array
}

export default ForecastExtended;
