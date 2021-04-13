import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import CustomerActions from './../components/CustomerActions'
import AppFrame from './../components/AppFrame'
import CustomerList from './../components/CustomerList'
import {fetchCustomer} from './../actions/fetchCustomer'
import {getCustomers} from './../selectors/customer'


class CustomersContainer extends Component {

  componentDidMount(){
    this.props.fetchCustomer()
  }

  handleAddNew = () => {
    this.props.history.push('/customers/new')
  }
  renderBody = customers => (
    <div>
      <CustomerList customers={customers} urlPath={'customers/'}/>
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame
          header={'Listado de clientes'}
          body={this.renderBody(this.props.customers)}></AppFrame>
      </div>
    );
  }
}

//defino props por defecto
CustomersContainer.defaultProps = {
  customers: [ ]
};

const mapStateToProps = state => ({
  customers: getCustomers(state)
})


export default withRouter(connect(mapStateToProps,{fetchCustomer})(CustomersContainer));
