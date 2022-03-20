import React from 'react';
import checked from '../services/image/check.png';

class Finished extends React.Component {
  render() {
    localStorage.setItem('carrinho', JSON.stringify([]));
    const infUser = JSON.parse(localStorage.getItem('finish'));
    return (
      <div>
        <h1>{`Obrigado por comprar com a gente ${infUser.nome}!`}</h1>
        <img src={ checked } alt="check" />
        <h2>Compra realizada com sucesso!</h2>

      </div>
    );
  }
}

export default Finished;
