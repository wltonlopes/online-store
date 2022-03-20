import React from 'react';
import CreateComments from './CreateComments';

class Comments extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      text: '',
      // commentLine: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { email, text } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <div>
            <input
              name="email"
              value={ email }
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
              required
            />
            <label htmlFor="stars">
              <input type="radio" id="one" name="stars" required />
              1
              <input type="radio" id="two" name="stars" />
              2
              <input type="radio" id="thre" name="stars" />
              3
              <input type="radio" id="four" name="stars" />
              4
              <input type="radio" id="five" name="stars" />
              5
            </label>
          </div>
          <div>
            <textarea
              name="text"
              value={ text }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
              id=""
              cols="45"
              rows="7"
              placeholder="Mensagem (opcional)"
            />
          </div>
          <button type="submit" onClick={ this.handleClick }>Enviar</button>
        </form>

        <section>
          {/* {comments.map((comment) => ( */}
          <CreateComments
            // key={ email }
            email={ email }
            text={ text }
          />
          {/* ))} */}
        </section>
      </div>
    );
  }
}

export default Comments;
