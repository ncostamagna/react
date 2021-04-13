import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer'
import CustomerContainer from './containers/CustomerContainer'
import './App.css';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;
  renderCustomerContainer = () => <h1>Customer New Container</h1>;
  renderCustomerListContainer = () => <CustomersContainer />;
  renderCustomerNewContainer = () => <NewCustomerContainer/>;


  // Switch va secuencialmente buscando rutas y la primera que encuentra es la unica que muestra,
  // lo uso para todos los Route sin necesidad de usar el exacts si quiero
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/customers">Customer</Link><br />
          <Link to="/customers/30000000">Customer 30000000</Link>

          <Route exact path='/' component={this.renderHome} />
          <Route exact path='/customers' component={this.renderCustomerListContainer} />
          <Switch>
            <Route path='/customers/new' component={this.renderCustomerNewContainer} />
            <Route path='/customers/:dni'
              render={props => <CustomerContainer dni={props.match.params.dni}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
