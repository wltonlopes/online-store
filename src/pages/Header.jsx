import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../services/image/ShoppingCart.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="head">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/checkout">
            <p>Pedidos</p>
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ ShoppingCart } alt="shopping cart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
