import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/inputs/SearchInput';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      idProducts: [],
      name: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.attCategory = this.attCategory.bind(this);
  }

  componentDidMount() {
    this.attCategory();
  }

  async handleClick() {
    const { match } = this.props;
    const { id } = match.params;
    const { name } = this.state;
    const response = await getProductsFromCategoryAndQuery(id, name);
    this.setState({
      idProducts: response.results,
    });
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      name: value,
    });
  }

  async attCategory() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await getProductsFromCategoryAndQuery(id, null);

    this.setState({
      idProducts: response.results,
    });
  }

  render() {
    const { idProducts } = this.state;
    return (
      <div>
        <SearchInput
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <ProductCard stateSearch={ idProducts } />
      </div>
    );
  }
}

Category.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Category;
