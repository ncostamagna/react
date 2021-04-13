import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types'
import transformWeather from './../../services/transformWeather'
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';


/*---> Ya no van a estar mas, son viejos
componentWillMount(){
  console.log("INSEGURO antes montar");
}
componentWillUpdate(nextProps, nextState){
  console.log("INSEGURO antes actualizar");
}
<---Ya no van a estar mas, son viejos*/


  /*state siempre se inicializa en el constructor
  constructor(props){
      super(props);
      const {city, citySelected} = props;
      console.log(props);
      this.state = {
        city,
        data: null
      };
      console.log("Constructor");
  }

  componentDidMount(){
    console.log("Montado");
    this.actualizarClick();
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Actualizado");
  }*/




  /*para actualizarlo tengo que usar setState
  actualizarClick = () =>{
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
    .then(resolve => {return resolve.json()})
    .then(data => {
      this.setState({
        data : transformWeather(data)
      });
    });
  };*/

const WeaterLocation = ({onWeatherLocationClick, city, data}) => (
        <div className="WeaterLocation" onClick={onWeatherLocationClick}>
          <Location city={city}></Location>
          {data ?
            <WeatherData data={data}></WeatherData>:
            <CircularProgress />}
        </div>
      );

WeaterLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState:  PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}
export default WeaterLocation;
