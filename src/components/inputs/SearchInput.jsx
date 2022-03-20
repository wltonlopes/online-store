import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          onChange={ handleChange }
          id="input"
          type="text"
          data-testid="query-input"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchInput;
