import React, { Component } from 'react'

export default class Prueba extends Component {

    handleClick = () => {
        console.log(this.props);
        const {history} = this.props;
        history.push('/invoices');        
    }


    render() {
        return (
        <div onClick={this.handleClick}>
            Prueba
        </div>
        )
    }
}
