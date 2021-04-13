import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { incrementar } from './reducers';
import UserForm from './components/UserForm';

class App extends Component {

  hSubmit = payload => {
    console.log(payload);
  }

  render() {
    const {incrementar, valor} = this.props;
    return (
      <div className="App">
        <p>{valor}</p>
        <button onClick={incrementar}></button>
        <UserForm onSubmit={this.hSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return{
    valor: state.contador,
  }
}

const mapDispachToProps = dispatch => ({
  incrementar: () => dispatch(incrementar())
})

export default connect(mapStateToProps, mapDispachToProps)(App);
