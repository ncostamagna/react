import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const CustomerListItem = props => {
  return(
    <div>
      <div className="customer-list-item">
        <div className="field">
          <Link to={`${props.urlPath}${props.dni}`}>{props.name}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}${props.dni}/edit`}>{props.editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${props.urlPath}${props.dni}/del`}>{props.delAction}</Link>
        </div>
      </div>
    </div>
  )
}

CustomerListItem.propTypes = {
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
};

export default CustomerListItem;
