import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import {connect} from 'react-redux';


class NewCustomerContainer extends Component {

    handleSubmit = () => {

    }

    handleOnsubmitSucces = () => {

    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnsubmitSucces}
                    onBack={this.handleOnBack} />
    }
  render() {
    return (
      <div>
        <AppFrame
            header={"Edicion del cliente"}
            body={this.renderBody()}></AppFrame>
      </div>
    )
  }
}


export default withRouter(connect(null,null)(NewCustomerContainer));
  