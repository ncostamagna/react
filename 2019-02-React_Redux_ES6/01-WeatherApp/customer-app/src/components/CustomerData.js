import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';

const CustomerData = props => {
  return(
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><strong>Nombre:</strong><i>{props.name}</i></div>
        <div><strong>DNI:</strong><i>{props.dni}</i></div>
        <div><strong>Edad:</strong><i>{props.age}</i></div>
      </div>
      <CustomerActions>
        <button onClick={props.onBack}>Volver</button>
      </CustomerActions>
    </div>
  )
}

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  props: PropTypes.func.isRequired,
};

export default CustomerData;
