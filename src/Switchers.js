import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Finished from './pages/Finished';

class Switchers extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/category/:id" component={ Category } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route path="/checkout/:name" component={ Finished } />
      </Switch>
    );
  }
}

export default Switchers;
