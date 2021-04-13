import React from 'react'
import WeatherLocation from './WeatherLocation'
import {PropTypes} from 'prop-types'


const LocationList = ({ cities, onSelectedLocation }) => {


  const hanldewlc = city => {
      console.log(city);
      onSelectedLocation(city);

  }


  const strToComponents = cities => (
    cities.map((city, index) => (

        <WeatherLocation
          key={city.key}
          city={city.name}
          onWeatherLocationClick={() => hanldewlc(city.name)}
          data={city.data}
      />
    ))
  );

  console.log(cities);
  
  return(
    <div>
        {strToComponents(cities)}
    </div>)
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;
