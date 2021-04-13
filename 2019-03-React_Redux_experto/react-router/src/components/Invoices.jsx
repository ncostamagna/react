import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Invoices extends Component {

  render() {
    return (
      <div>Componentre invoces
        <Link to="/">Volver al raiz</Link>
      </div>
    )
  }
}
