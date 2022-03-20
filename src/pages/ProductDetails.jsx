import React from 'react';
import './ProductDetails.css';
import PropTypes from 'prop-types';
import Comments from '../components/Comments';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      idProduct: '',
      arrayProducts: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const idsSplit = id.split('+');
    const response = await getProductsFromCategoryAndQuery(idsSplit[1], null);
    this.setState({
      idProduct: idsSplit[0],
      arrayProducts: response.results,
    });
  }

  addCartItem(product) {
    console.log(product);
    const cartStorage = JSON.parse(localStorage.getItem('carrinho'));
    const findItem = cartStorage.find((cart) => cart.id === product.id);
    if (findItem !== undefined) {
      const newCart = cartStorage.map((item) => (
        item.id === product.id
          ? { ...findItem, quantity: findItem.quantity + 1 } : item));
      localStorage.setItem('carrinho', JSON.stringify([...newCart]));
    } else {
      localStorage
        .setItem('carrinho',
          JSON.stringify([...cartStorage, { ...product, quantity: 1 }]));
    }
  }

  render() {
    const { idProduct, arrayProducts } = this.state;
    if (arrayProducts.length === 0) return <span>Carregando...</span>;
    const findProduct = arrayProducts.find((product) => product.id === idProduct);
    if (findProduct === undefined) return <h3>Produto indisponível...</h3>;
    const free = findProduct.shipping.free_shipping;
    return (
      <div className="product">
        <div>
          <p data-testid="product-detail-name">{findProduct.title}</p>
          {free ? <h5 data-testid="free-shipping">Frete Gratis</h5> : false}
          <img src={ findProduct.thumbnail } alt="foto-produto" width="250px" />
          <p>
            PREÇO: R$
            {findProduct.price}
          </p>
        </div>
        <button
          type="button"
          onClick={ () => this.addCartItem(findProduct) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho!
        </button>

        <div>
          <Comments />
        </div>

      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
