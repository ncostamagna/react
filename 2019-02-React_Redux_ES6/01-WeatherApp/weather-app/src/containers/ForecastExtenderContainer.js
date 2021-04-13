import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {setCity} from './../actions';
import ForecastExtended from './../components/ForecastExtended';
import {getForcastDataFromCities, getCity} from './../reducers'
class ForecastExtenderContainer extends Component {

  render(){
    const {city, forcastData} = this.props
    console.log(this.props);
      return(
        city &&
        <ForecastExtended city={city} forcastData={forcastData}/>
      );
  }
};

ForecastExtenderContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forcastData: PropTypes.array
};

const mapStateToProps = state => ({
  city: getCity(state),
  forcastData: getForcastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecastExtenderContainer);
