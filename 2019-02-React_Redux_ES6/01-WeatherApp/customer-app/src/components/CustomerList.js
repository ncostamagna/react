import React from 'react';
import PropTypes from 'prop-types';

import CustomerListItem from './CustomerListItem'
import { Link } from 'react-router-dom'

const CustomerList = ({customers, urlPath}) => {
  return(
    <div>
      <div className="customer-list">
        {
          customers.map( c =>
            <CustomerListItem
              key={c.dni}
              dni={c.dni}
              name={c.name}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlPath={urlPath}
              dni={c.dni}>
            </CustomerListItem>)
        }
      </div>
    </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
