import React from 'react';
import PropTypes from 'prop-types';

class FormCheckout extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    const { cep, cidade,
      complemento, cpf, email, endereco, estado, nome, numero, telefone } = value;
    return (
      <div>
        <input
          type="text"
          name="nome"
          value={ nome }
          data-testid="checkout-fullname"
          placeholder="Nome do Comprador"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="cpf"
          value={ cpf }
          data-testid="checkout-cpf"
          placeholder="CPF"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="email"
          value={ email }
          data-testid="checkout-email"
          placeholder="Email"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="telefone"
          value={ telefone }
          data-testid="checkout-phone"
          placeholder="Telefone"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="cep"
          value={ cep }
          data-testid="checkout-cep"
          placeholder="CEP"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="endereco"
          value={ endereco }
          data-testid="checkout-address"
          placeholder="Endereço"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="complemento"
          value={ complemento }
          placeholder="Complemento"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="numero"
          value={ numero }
          placeholder="Número"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="cidade"
          value={ cidade }
          placeholder="Cidade"
          onChange={ handleChange }
        />
        <select
          name="estado"
          value={ estado }
          onChange={ handleChange }
        >
          <option>MG</option>
          <option>SP</option>
          <option>RJ</option>
          <option>SC</option>
          <option>AM</option>
        </select>
      </div>
    );
  }
}

FormCheckout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FormCheckout;
