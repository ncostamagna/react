import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppFrame from './../components/AppFrame'
import {getCustomerByDni} from './../selectors/customer'
import {Route, withRouter} from 'react-router-dom'
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'
import {fetchCustomer} from './../actions/fetchCustomer'
import {updateCustomer} from './../actions/updateCustomer'
import {SubmissionError} from 'redux-form'
class CustomerContainer extends Component {

  componentDidMount(){
    if(! this.props.customer){
      this.props.fetchCustomer();
    }
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values))
    const {id} = values;
    return this.props.updateCustomer(id,values).then(r => {
      if(r.error) {
        throw new SubmissionError(r.payload);
      }
    })
  }

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  }

  //redireccionar desde js
  handleOnClick = () => {
    this.props.history.push('/customers')
  };
  //<p>datos del cliente {this.props.customer.name}</p>
  //{...this.props.customer} -> todas las propiedades de customer
  renderBody = () => (
    <Route path="/customers/:dni/edit" children={
      ({match}) => {
        if(this.props.customer){
          const CustomerControl = match ? CustomerEdit : CustomerData;

          return <CustomerControl {...this.props.customer} 
            onSubmit={this.handleSubmit}
            onBack={this.handleOnBack}
            onSubmitSuccess={this.handleOnSubmitSuccess}/>
        }
        return null;
        //initialValues={this.props.customer}
        }
    } />
  );

  render() {
    console.log(this.props.customer);
    return (
      <div>
        <AppFrame header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}>
        </AppFrame>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props),
});

export default withRouter(connect(mapStateToProps,{
  fetchCustomer,
  updateCustomer,
})(CustomerContainer));
