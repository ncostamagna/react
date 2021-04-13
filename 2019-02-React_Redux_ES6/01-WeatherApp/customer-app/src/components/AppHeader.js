import React from 'react';
import PropTypes from 'prop-types';

const AppHeadrer = props => {
  return(
    <div>
      <div className="app-header">
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}

AppHeadrer.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppHeadrer;
