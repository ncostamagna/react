import React, { Component } from 'react';
import {Grid,Col,Row} from 'react-flexbox-grid'
import logo from './logo.svg';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtenderContainer from './containers/ForecastExtenderContainer';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Lima,pe'
]


class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null
    }
  }

  render() {
    return (

      <div className="App">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer
                cities={cities} ></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <div className="details">
                <ForecastExtenderContainer></ForecastExtenderContainer>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
