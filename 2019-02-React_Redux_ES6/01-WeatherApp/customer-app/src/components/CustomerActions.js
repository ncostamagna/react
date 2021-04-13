import React from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({ children }) => {
  return(
    <div>
      <div className="customer-actions">
        <div>{children}</div>
      </div>
    </div>
  )
}

//Todo tipo de elemento renderizable que React nos permita
CustomerActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default CustomerActions;
