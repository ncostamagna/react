import React from 'react'
import PropTypes from 'prop-types'
//Parentesis, devuelve contenido en una sola linea
//const Location = (props) => {
const Location = ({city}) => {
  //console.log(props);

  //Desctructuring de ES6
  //const {city} = props;

  //Hacer debbug
  //debugger;
  return (
    <div>
      <h1>
        {city}
      </h1>
    </div>
  )
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;
