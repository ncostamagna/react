import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader'
//valores de props, usamos destruring
const AppFrame = ({header, body}) => {
  return(
    <div>
      <div className="app-frame">
        <AppHeader title={header}/>
        <div>{body}</div>
        <div>Aplicacion simple de Ejemplo</div>
      </div>
    </div>
  )
}

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired
};

export default AppFrame;
