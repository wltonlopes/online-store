import React from 'react';
import { Link } from 'react-router-dom';
import FormCheckout from '../components/inputs/FormCheckout';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
      priceTotal: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    localStorage.setItem('finish', JSON.stringify(this.state));
  }

  getShoppingCart = () => {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    if (storage.length === 0) return <p>Nenhuma produto no carrinho</p>;
    const amount = storage.map((producto) => {
      const price = producto.price * producto.quantity;
      return price;
    });
    const totalPrice = amount.reduce((sum, price) => sum + price);
    return (
      <div>
        {storage.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.id } />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </div>
        ))}
        <h4>
          Total:
          { totalPrice.toFixed(2) }
        </h4>
      </div>
    );
  }

  render() {
    const { nome } = this.state;
    return (
      <div>
        <h3>Revise Seus Produto</h3>
        <section>
          {this.getShoppingCart()}
        </section>
        <section>
          <h3>Informações do Comprador</h3>
          <FormCheckout
            handleChange={ this.handleChange }
            value={ this.state }
          />
        </section>
        <h3>Método de Pagamento</h3>
        Boleto
        <label htmlFor="boleto">
          <input
            type="radio"
            name="pagamento"
            id="boleto"
          />
          Boleto
        </label>
        <section>
          Cartão de Crédito
          <label htmlFor="visa">
            <input
              type="radio"
              name="pagamento"
              id="visa"
            />
            Visa
          </label>
          <label htmlFor="mastercard">
            <input
              type="radio"
              name="pagamento"
              id="mastercard"
            />
            MasterCard
          </label>
          <label htmlFor="elo">
            <input
              type="radio"
              name="pagamento"
              id="elo"
            />
            Elo
          </label>
        </section>
        <Link to={ `/checkout/${nome}` }>
          <button
            data-testid="checkout-products"
            type="submit"
            onClick={ this.handleClick }
          >
            Finalizar
          </button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
