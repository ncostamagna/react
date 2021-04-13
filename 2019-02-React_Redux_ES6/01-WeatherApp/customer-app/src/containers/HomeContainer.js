import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import CustomerActions from './../components/CustomerActions'
import AppFrame from './../components/AppFrame'

class HomeContainer extends Component {

  //redireccionar desde js
  handleOnClick = () => {
    this.props.history.push('/customers')
  };


  render() {
    return (
      <div>
        <AppFrame
          header='Home'
          body={
            <div>Esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleOnClick}>Listado de Clientes</button>
              </CustomerActions>
            </div>
          }></AppFrame>
      </div>
    );
  }
}

export default withRouter(HomeContainer);
