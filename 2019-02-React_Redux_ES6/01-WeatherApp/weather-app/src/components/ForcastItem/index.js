import React from 'react'
import {PropTypes} from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'


const ForcastItem = ({weekDay, hour, data}) => (
  <div>
    <WeatherData data={data}/>
    <div>{weekDay} Hora: {hour}</div>
  </div>
);

ForcastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState:  PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}

export default ForcastItem;
